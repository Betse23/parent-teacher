import React from "react";

const Landing = () => {
  return (
    <div class="min-h-[500px] bg-white mt-4 px-4 sm:px-10">
      <div class="max-w-7xl w-full mx-auto py-16">
        <div class="grid lg:grid-cols-2 justify-center items-center gap-10">
          <div>
          <h1 class="md:text-5xl text-4xl font-extrabold mb-6 md:!leading-[55px] text-yellow-500  animate-bounce">
          Empowering Communication and tracking Student Progress.
      </h1>
      
            <p class="text-base font-bold leading-relaxed">
              Revolutionize how parents and teachers connect, track student
              progress effortlessly, and celebrate achievements together.
            </p>
            <div class="flex flex-wrap gap-y-4 gap-x-8 mt-8"></div>
          </div>
          <div class="max-lg:mt-12 h-full">
            <img
              src="image/bg.webp"
              alt="banner img"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
