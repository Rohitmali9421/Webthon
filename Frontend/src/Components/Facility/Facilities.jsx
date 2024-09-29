import React, { useEffect } from 'react'
import Card from './Card'
import f1 from "../../assets/Images/f1.png"
import f2 from "../../assets/Images/f2.png"
import f3 from "../../assets/Images/f3.png"
import f4 from "../../assets/Images/f4.png"
import f6 from "../../assets/Images/f6.png"
import f5 from "../../assets/Images/f5.png"
import Aos from 'aos';
import 'aos/dist/aos.css';
function Facilities() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  return (
    <div className='w-full pt-10 pb-6'>
    <div className='flex w-full justify-center mb-4'>
        <h1 data-aos="fade-right" className='font-bold text-2xl md:text-4xl text-orange-600 '>Facilities  </h1>
      </div>
    <div className='grid grid-cols-3 gap-4 md:grid-cols-6'>
     <Card image={f1} text="Wifi" />
     <Card image={f2} text="Projector" />
     <Card image={f3} text="AC" />
     <Card image={f4} text="LCD Screen " />
     <Card image={f5} text="Mic" />
     <Card image={f6} text="Amplifier" />
    </div>
    </div>
  )
}

export default Facilities
