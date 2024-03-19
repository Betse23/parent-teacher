
import Footer from './components/Footer'
import Landing from './components/Landing'
import Ourmission from './components/Mission'
import Homepage from './components/Navbar'
import Service from './components/Service'


export default function Home() {
  return (
    <div>
      <Homepage/>
      <Landing/>
      <Service/>
      <Ourmission/>
      <Footer/>
    </div>
  )
}
