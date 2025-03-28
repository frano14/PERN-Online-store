import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import { Rocket, RotateCcw, Tag, LifeBuoy  } from "lucide-react";
import SneakersWrapper from '../components/SneakersWrapper';
import axios from 'axios';
import useProductStore from '../store/useProductStore';
import Slider from '../components/Slider';
const Home = () => {

  const { products, fetchLandingProducts } = useProductStore();

  useEffect(() => {
    if(products.length === 0) { fetchLandingProducts() }
  }, []);

  return (
    <>
      <Hero/>
      <div className='w-[1200px] mx-auto text-white'>
        <div className='grid grid-cols-4 py-8 gap-8'>
          
          <div className='flex items-center gap-4 text-white'>
            <Rocket size={36} color='white'/>
            <div>
              <p className='text-[18px]'>FREE SHIPING</p>
              <p className='text-[#FFFFFF60] text-[14px]'>Order 100$ or more</p>
            </div>
          </div>

          <div className='flex items-center gap-4 text-white'>
            <RotateCcw  size={36} color='white'/>
            <div>
              <p className='text-[18px]'>FREE RETURN</p>
              <p className='text-[#FFFFFF60] text-[14px]'>Within 30 days</p>
            </div>
          </div>

          <div className='flex items-center gap-4 text-white'>
            <Tag size={36} color="white" />
            <div>
              <p className='text-[18px]'>GET 20% OFF</p>
              <p className='text-[#FFFFFF60] text-[14px]'>When you sign up</p>
            </div>
          </div>

          <div className='flex items-center gap-4 text-white'>
            <LifeBuoy  size={36} color="white" />
            <div>
              <p className='text-[18px]'>WE SUPPORT</p>
              <p className='text-[#FFFFFF60] text-[14px]'>24/7 amazing services</p>
            </div>
          </div>
        </div>

        <SneakersWrapper tag="trending" title="Trending Sneakers"/>
        <Slider/>
        <SneakersWrapper tag="new" title="Just Droped"/>
        <SneakersWrapper tag="sale" title="Best Deals"/>

      </div>
    </>
  )
}

export default Home
