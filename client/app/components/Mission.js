import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { TbProgressDown } from "react-icons/tb";

const Ourmission = () => {
  return (
    <section id="mission">
       <div class="bg-gray-100 px-6 py-12 font-[sans-serif]">
        <div class="container mx-auto p-6 bg-white rounded-lg shadow-md">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <img src="image/service1.webp" alt="Image" class="rounded-md object-cover w-full h-full" />
            </div>
            <div>
              <h2 class="text-3xl font-extrabold text-purple mb-4">Our Mission</h2>
              <p class="text-left text-black text-lg font-normal">
              At PTCSPT, we are dedicated to transforming how parents, teachers, and students communicate and track progress. We aim to make it easy for everyone involved to work together, celebrate achievements, tackle challenges, and foster growth. Our goal is to empower every student by enabling open communication, personalized support, and a secure, user-friendly platform.
              </p>
              <div>
              
              </div>
              <ul class="list-disc text-lg text-black font-normal space-y-2 pl-4 mt-6">
                <li>Transparency.</li>
                <li>Collaboration.</li>
                <li>Inclusivity.</li>
                <li>Excellence.</li>
      
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourmission;