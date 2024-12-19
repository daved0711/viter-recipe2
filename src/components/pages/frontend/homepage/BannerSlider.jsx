import { imgPath } from '@/components/helpers/functions-general'
import { ArrowRight, Clock, HandPlatter, Utensils } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import useQueryData from '@/components/custom-hook/useQueryData'

const BannerSlider = ({result}) => {

    const settings = {
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoPlay: true,
        autoplaySpeed: 200,
        pauseOnHover: false,
      };
  return (
    <section>
        <Slider {...settings}>
            {result?.data.map((item, key) => (
                <div className='w-full h-[calc(100vh-72px)] relative' key={key}>
                <img src={`${imgPath}/${item.recipe_image}`} alt="" className='w-full h-[105%] object-cover'/>

                <div className="tint w-full h-[105%] bg-black bg-opacity-70 absolute top-0 left-0"></div>
                
                <div className='absolute max-w-[400px] top-1/2 md:left-[calc((100vw-1200px)/2)] p-4 text-white md:max-w-[500px] -translate-y-1/2'>
                    
                    <h2 className='md:text-5xl'>{item.recipe_title}</h2>
                    
                    <ul className='flex gap-5 mb-5'>
                        <li className='flex gap-2 items-center'>
                            <Clock/> {item.recipe_prep_time} 
                        </li>

                        <li className='flex gap-2 items-center'>
                            <Utensils/> {item.recipe_serving} Servings
                        </li>

                        <li className='flex gap-2 items-center capitalize'>
                            <HandPlatter/> {item.recipe_category}
                        </li>
                    </ul>

                    <p className='mb-5'>
                    {item.recipe_description}
                    </p>

                    <Link to={`/recipe/single/${item.recipe_title.replaceAll(" ", "-")}`} className='flex gap-3 group items-center hover:text-accent transition-all font-bold'>
                    View Full Recipe 
                    <ArrowRight
                    size={18} 
                    className='opacity-0 -translate-x-3 transition-all group-hover:opacity-100
                    group-hover:translate-x-0 stroke-accent'/>
                    </Link>

                </div>

            </div>
            ))}
            

        </Slider>
    </section>
  )
}

export default BannerSlider