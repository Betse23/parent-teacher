import React from "react";
// import styles from '../styles.module.css';
import { FaGithub } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
    
    <footer class="bg-gray-200 font-[sans-serif] ">
    <div class="py-10 px-4 sm:px-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div class="lg:col-span-2">
          <a href='javascript:void(0)'><img src="/image/logo2.png" alt="logo"
            class='w-20 mb-6' /></a>
          <p class="text-black text-[15px]">Empowering Communication and tracking Student Progress.</p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-6 text-black">Navigation</h4>
          <ul class="space-y-4">
            <li><a href="javascript:void(0)" class="text-black font-normal hover:text-blue-800 text-[15px]">Home</a></li>
            <li><a href="javascript:void(0)" class="text-black font-normal hover:text-blue-800 text-[15px]">Ourmission</a></li>
            <li><a href="javascript:void(0)" class="text-black font-normal hover:text-blue-800 text-[15px]">Services</a></li>
            <li><a href="javascript:void(0)" class="text-black font-normal hover:text-blue-800 text-[15px]">About Us</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-6 text-black">Follow Us</h4>
          <ul class="flex space-x-5">
            <li><a href="javascript:void(0)" class="text-black hover:text-blue-800">
            <FaGithub />
            </a></li>
            <li><a href="javascript:void(0)" class="text-black hover:text-blue-800">
            <CiLinkedin /></a></li>
            <li><a href="javascript:void(0)" class="text-black hover:text-blue-800">
            <FaInstagram /></a></li>
            
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-6 text-black">Contact Us</h4>
          <div class="space-y-4">
            <p class="text-black font-normal text-[15px]">123 Street, City Name</p>
            <p class="text-black font-normal text-[15px]">contact@example.com</p>
            <p class="text-black font-normal text-[15px]">+1 234 567 890</p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center py-5 bg-blue-800">
      <p class='text-white text-[15px]'>© 2023<a href='#' target='_blank'
        class="hover:underline mx-1">PTCSPT</a>All Rights Reserved.</p>
    </div>
  </footer>
    
    </div>
 
  );
};

export default Footer;