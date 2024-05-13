import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/ongoing/welfare-projects1.jpg';
import img2 from '../assets/ongoing/welfare-projects2.jpg';
import img3 from '../assets/ongoing/welfare-projects3.jpg';
import img4 from '../assets/ongoing/welfare-projects4.jpg';
import img5 from '../assets/ongoing/welfare-projects5.jpg';
import img6 from '../assets/ongoing/welfare-projects6.jpg';

const CardSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };

  return (
    <div className='w-3/4 m-auto'>
        <div className='mt-20'>
            <Slider {...settings}>
                {data.map((d) => (
                    <div className='bg-white h-[450px] text-black rounded-xl'>
                        <div className='h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center'>
                            <img src={d.img} alt="" className='h-44 w-44 rounded-full' />
                        </div>
                        <div className='flex flex-col justify-center items-center gap-4 p-4'>
                            <p className='text-xl font-semibold'>{d.name}</p>
                            <p>{d.review}</p>
                            <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                        </div>
                    </div>
                ))}
            </Slider> 
        </div>
    </div>
  )
}

const data = [
    {
        name: `John Morgan`,
        img: img1,
        review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt possimus sed quos vel optio delectus veritatis saepe placeat aliquid quo.`
    },
    {
        name: `John Morgan`,
        img: img2,
        review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt possimus sed quos vel optio delectus veritatis saepe placeat aliquid quo.`
    },
    {
        name: `John Morgan`,
        img: img3,
        review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt possimus sed quos vel optio delectus veritatis saepe placeat aliquid quo.`
    },
    {
        name: `John Morgan`,
        img: img4,
        review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt possimus sed quos vel optio delectus veritatis saepe placeat aliquid quo.`
    },
    {
        name: `John Morgan`,
        img: img5,
        review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt possimus sed quos vel optio delectus veritatis saepe placeat aliquid quo.`
    },
    {
        name: `John Morgan`,
        img: img6,
        review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt possimus sed quos vel optio delectus veritatis saepe placeat aliquid quo.`
    },

]

export default CardSlider