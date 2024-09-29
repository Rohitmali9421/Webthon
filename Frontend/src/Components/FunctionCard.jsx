import React, { useEffect } from 'react'
import v6 from "../assets/Images/v6.jpg"
import c1 from "../assets/Images/c1.png"
import c2 from "../assets/Images/c2.png"
import c3 from "../assets/Images/c3.jpg"
import Aos from 'aos';
import 'aos/dist/aos.css';
function FunctionCard() {
    useEffect(() => {
        Aos.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        });
      }, []);
    return (
        <div className='' data-aos="fade-up">
            <div className='flex w-full justify-center py-3'>
                <h1 className='font-bold text-2xl md:text-4xl '>Past  </h1>
                <h1 className='font-bold text-2xl md:text-4xl pl-2 text-orange-600'>Events</h1>
            </div>
            <div className='w-full p-6 flex justify-around flex-wrap gap-10 '>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={c1} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={c2} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                    <img className="w-full" src={c3} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default FunctionCard
