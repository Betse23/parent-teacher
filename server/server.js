const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 5000;
const JWT_SECRET = 'your_jwt_secret'; // Replace with a strong and secure secret key

app.use(bodyParser.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ptc'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

// API endpoints

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const query = `SELECT users.*, roles.name AS role FROM users 
//                  INNER JOIN roles ON users.role_id = roles.id 
//                  WHERE username='${username}' AND password='${password}'`;
//   db.query(query, (err, result) => {
//     if (err) {
//       res.status(500).send({ error: 'Database error' });
//     } else {
//       if (result.length > 0) {
//         res.send({ user: result[0] });
//       } else {
//         res.status(401).send({ error: 'Invalid credentials' });
//       }
//     }
//   });
// });

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const query = `SELECT users.*, roles.name AS role FROM users 
                   INNER JOIN roles ON users.role_id = roles.id 
                   WHERE username='${username}'`;
    db.query(query, async (err, result) => {
      if (err) {
        res.status(500).send({ error: 'Database error' });
      } else {
        if (result.length > 0) {
          const user = result[0];
          // Compare hashed password with the provided password
          const match = await bcrypt.compare(password, user.password);
          if (match) {
            // Generate JWT token
            const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '2m' });
            res.send({ user, token });
          } else {
            res.status(401).send({ error: 'Invalid credentials' });
          }
        } else {
          res.status(401).send({ error: 'Invalid credentials' });
        }
      }
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ error: 'Server error' });
  }
});


// Middleware to verify JWT token
// const verifyToken = (req, res, next) => {
//   const token = req.headers['authorization'];
//   if (!token) return res.status(401).send({ error: 'Unauthorized' });
//   jwt.verify(token, JWT_SECRET, (err, decoded) => {
//     if (err) return res.status(401).send({ error: 'Unauthorized' });
//     req.user = decoded;
//     next();
//   });
// };

// // Sample protected route
// app.get('/protected', verifyToken, (req, res) => {
//   res.send({ message: 'This is a protected route', user: req.user });
// });

//empty user object
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send({ error: 'Unauthorized' });

  // Extract the JWT token from the Authorization header (Bearer token)
  const accessToken = token.split(' ')[1];

  try {
    // Verify the JWT token
    const decoded = jwt.verify(accessToken, JWT_SECRET);
    // Attach the decoded user information to the request object for further processing
    req.user = decoded;
    next();
  } catch (error) {
    console.error('JWT verification error:', error);
    res.status(401).send({ error: 'Unauthorized' });
  }
};

// Protected route
app.get('/protected', verifyToken, (req, res) => {
  // Here, req.user should contain the decoded user information
  if (!req.user) {
    return res.status(401).send({ error: 'Unauthorized' });
  }
  res.send({ message: 'This is a protected route', user: req.user });
});



// API endpoint for user registration
app.post('/register', async (req, res) => {
  const { username, password, role_id } = req.body;
  try {
    // Check if the username already exists
    const checkQuery = `SELECT * FROM users WHERE username='${username}'`;
    const checkResult = await db.query(checkQuery);
    if (checkResult.length > 0) {
      return res.status(400).send({ error: 'Username already exists' });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Insert the new user into the database
    const insertQuery = `INSERT INTO users (username, password, role_id) VALUES ('${username}', '${hashedPassword}', '${role_id}')`;
    await db.query(insertQuery);
    res.send({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ error: 'Database error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
