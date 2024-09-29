import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Images/logo.jpg"
function About() {
  return (
    <section class="py-24 relative">
      <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">We have Seminar Halls also we have an open air Auditorium.  </h2>
              <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">Our seminar halls are well-equipped with advanced sound systems and projector facilities that support proper training and lectures. Seminar halls are totally air-conditioned and hold a seminar hall capacity of more than 100 individuals. It also holds instruments that of the smart classrooms, such as the –Quality audio-visual systems
                Microphones
                Slide projectors
              </p>
            </div>
            <Link to="/book" class="sm:w-fit w-full px-3.5 py-2 bg-orange-500 hover:bg-orange-600 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
              <span class="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
            </Link>
          </div>
          <img class="lg:mx-0 mx-auto h-full rounded-3xl object-cover w-full px-10" src={logo} alt="about Us image" />
        </div>
      </div>
    </section>

  );
}

export default About;
