import React, { useEffect } from 'react';
import Hero1 from "../assets/Images/Hero1.webp";
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
function Banner() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${Hero1})` }}
    >
      <div className='w-full h-full flex justify-center items-center flex-col '>
        <h1 data-aos="fade-up" className='font-extrabold text-3xl text-white text-center '>Discover Extraordinary Comfort in Seminar Hall</h1>
        <Link to="/book" data-aos="fade-up" className=' px-4 py-1 mt-4 text-lg font-semibold text-white bg-orange-500 rounded-md'>Get started</Link>
      </div>
    </div>
  );
}

export default Banner;
