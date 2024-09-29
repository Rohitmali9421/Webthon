import React, { useEffect } from 'react'
import v1 from "../assets/Images/v1.jpg"
import v2 from "../assets/Images/v2.jpg"
import v3 from "../assets/Images/v3.jpg"
import v4 from "../assets/Images/v4.jpg"
import v5 from "../assets/Images/v5.jpg"
import v6 from "../assets/Images/v6.jpg"
import Aos from 'aos';
import 'aos/dist/aos.css';
function Featured() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);
  return (
    <div className='w-full pt-10 pb-6 px-6'>
      <div className='flex w-full justify-center' data-aos="fade-right">
        <h1 className='font-bold text-2xl md:text-4xl '>Featured  </h1>
        <h1 className='font-bold text-2xl md:text-4xl pl-2 text-orange-600'>Views</h1>
      </div>
      <div className='grid w-full px-3  md:gap-3 gap-1 grid-cols-3 md:grid-cols-4 mt-8'>
        <div className='col-span-3  md:col-span-2'>
          <img src={v6} className=' object-cover h-full' loading="lazy" alt="" />
        </div>
        <div className='  '>
          <img src={v1} className=' object-cover h-full' loading="lazy" alt="" />
        </div>
        <div className='  row-span-2'>
          <img src={v2} className=' object-cover h-full ' loading="lazy" alt="" />
        </div>
        <div className=' '>
          <img src={v3} className=' object-cover h-full' loading="lazy" alt="" />
        </div>
        <div className=' '>
          <img src={v4} className=' object-cover h-full' loading="lazy" alt="" />
        </div>
        <div className=' '>
          <img src={v5} className=' object-cover h-full' loading="lazy" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Featured
