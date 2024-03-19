import React from "react";
// import { IoSettingsOutline } from "react-icons/io5";
import { TbProgressDown } from "react-icons/tb";
import { GrDocumentPerformance } from "react-icons/gr";
import { FaWatchmanMonitoring } from "react-icons/fa6";


const Service = () => {
  return (
    <div class="mt-10 pb-10 pt-10 px-4 sm:px-10 bg-gray-200">
    <div class="max-w-7xl w-full mx-auto">
      <div class="grid lg:grid-cols-2 items-center gap-10">
        <div class="">
          <h2 class="md:text-4xl text-3xl font-extrabold mb-6">Our Services</h2>
          <p class="text-left text-black text-lg font-normal">Welcome to PTCSPT where we are dedicated to fostering seamless communication between parents and teachers and empowering student success through effective progress tracking.</p>
          
        </div>
        <div class="grid sm:grid-cols-2 gap-8  " >
          <div
            class="text-center bg-white hover:shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6 ">
            <div class="fill-blue-800 w-12 inline-block bg-yellow-500 p-3 rounded-full ">
            <TbProgressDown  size={25}/>
            </div>
            <h3 class="text-base font-extrabold mt-6 mb-2">Progress Reports</h3>
            <a href="" class="text-blue-800 font-bold inline-block hover:underline">Learn more</a>
          </div>
          <div
            class="text-center bg-white hover:shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6">
            <div class="fill-blue-800 w-12 inline-block bg-yellow-500 p-3 rounded-full">
            <GrDocumentPerformance />
            </div>
            <h3 class="text-base font-extrabold mt-6 mb-2">Performance Analytics</h3>
            <a href="javascript:void(0);" class="text-blue-800 font-bold inline-block hover:underline">Learn more</a>
          </div>
          <div
            class="text-center bg-white hover:shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6">
            <div class="fill-blue-800 w-12 inline-block bg-yellow-500 p-3 rounded-full">
            <FaWatchmanMonitoring />
            </div>
            <h3 class="text-base font-extrabold mt-6 mb-2">Attendance Monitoring</h3>
            <a href="javascript:void(0);" class="text-blue-800 font-bold inline-block hover:underline">Learn more</a>
          </div>
          <div
            class="text-center bg-white hover:shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] transition-all rounded-xl p-6">
            <div class="fill-blue-800 w-12 inline-block bg-yellow-500 p-3 rounded-full">
            <TbProgressDown  size={25}/>
            </div>
            <h3 class="text-base font-extrabold mt-6 mb-2">Assignment Tracking</h3>
            <a href="javascript:void(0);" class="text-blue-800 font-bold inline-block hover:underline">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default Service;