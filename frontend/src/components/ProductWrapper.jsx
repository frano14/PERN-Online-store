import React, { useState } from 'react';
import useProductStore from '../store/useProductStore';

const ProductWrapper = () => {
  const { currentProduct } = useProductStore();
  const date = new Date(currentProduct?.created_at);
  const formattedDate = date.toLocaleDateString("en-GB").replace(/\//g, ".");
  const [deliveryBlock, setDeliveryBlock] = useState(false)
  return (
    currentProduct ? (
      <div className='grid grid-cols-2 gap-8 text-white pb-8'>
        <div>
          <img 
            src={currentProduct.image_url} 
            alt={currentProduct.title} 
            className='rounded-xl' 
          />
        </div>
        <div className='w-[65%]'>
          <h2 className='text-[26px] '>{currentProduct.brand_name} {currentProduct.collection_name} {currentProduct?.version_name}</h2>
          <h4 className='text-[#FFFFFF90]'>{currentProduct.model}</h4> 
          <p className='font-semibold text-[18px] my-8'>${currentProduct.price}</p>
          <div className=''>
            <div className='flex items-center justify-between font-semibold text-[14px] mb-2'>
              <p>Select size</p>
              <p>Size Guide</p>
            </div>
            <div className='grid grid-cols-4 gap-2'>
            {currentProduct?.sizes.map((size)=>(
                <div className='px-4 py-2 bg-[#FFFFFF10] rounded-lg text-center border-[#FFFFFF95] border-2 cursor-pointer hover:bg-[#FFFFFF25]' key={size}>
                  {size}
                </div>
            ))}
            </div>
          </div>
          <button className='my-14 py-4 text-[18px] font-semibold bg-white text-black w-full rounded-full hover:bg-primary hover:text-white'>Add to cart</button>
          <div tabIndex={0} className="collapse focus:outline-none bg-base-100 rounded-none border-b-2 border-[#FFFFFF30] collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title px-0 text-[20px]">Free Delivery and Returns</div>
            <div className="collapse-content text-[14px]">
                <p><span className='font-semibold'>Lane2k members🔥</span> enjoy free delivery in just 72h and free reutrn in 30days.</p>
                <p className='mt-3 mb-1'>For all others, we offer free return in 7 days. And you have 2 types of delivery:</p>
                <p className='mb-1 text-[#FFFFFF95]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='font-semibold'>Standard</span> (3-5 days)</p> 
                <p className='text-[#FFFFFF95]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='font-semibold'>Express</span> (1-2 days)</p> 
            </div>
          </div>
          <div tabIndex={0} className="collapse focus:outline-none bg-base-100 rounded-none border-b-2 border-[#FFFFFF30] collapse-arrow">
            <input type="checkbox" />
            <div className="collapse-title px-0 text-[20px]">View Product Details</div>
            <div className="collapse-content">
                <p className='text-[#FFFFFF95] text-[14px]'><span className='text-[16px] text-white'>✒️ Description: </span>{currentProduct.description}</p>
                <div className='flex items-center gap-2 py-2'>
                  <p>🎨 Color:</p>
                  <div className='flex items-center gap-1'>
{/*                     <div className='rounded-full p-1 w-[4px] h-[4px] bg-blue-600'></div>
 */}                    <p className='text-[#FFFFFF95]'>{currentProduct.color}</p>
                  </div>
                </div>
                <div className='flex items-center gap-2 py-2'>
                  <p>📦 On stock:</p>
                  <div className='flex items-center gap-1'>
                    <p className='text-[#FFFFFF95]'>{currentProduct.stock} items</p>
                  </div>
                </div>
                <div className='flex items-center gap-2 py-2'>
                  <p>💸 Sold:</p>
                  <div className='flex items-center gap-1'>
                    <p className='text-[#FFFFFF95]'>{currentProduct.sold_count} items</p>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <p>✅ Status:</p>
                  <div className='flex items-center gap-1 py-2'>
                    <div className={`rounded-full p-1 w-[4px] h-[4px] ${currentProduct.status === 'available' ? 'bg-green-600' : 'bg-red-600'}`}></div>
                    <p className='text-[#FFFFFF95]'>{currentProduct.status}</p>
                  </div>
                </div>
                <div className='flex items-center gap-2 py-2'>
                  <p>🏭 Manufactured:</p>
                  <div className='flex items-center gap-1'>
                    <p className='text-[#FFFFFF95]'>{currentProduct.year}</p>
                  </div>
                </div>
                <div className='flex items-center gap-2 py-2'>
                  <p>🏷️ Tag:</p>
                  <div className='flex items-center gap-1'>
                    <p className='text-[#FFFFFF95]'>{currentProduct.tag}</p>
                  </div>
                </div>
                <div className='flex items-center gap-2 py-2'>
                  <p>🚀 Released:</p>
                  <div className='flex items-center gap-1'>
                    <p className='text-[#FFFFFF95]'>{formattedDate}</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <p>Loading...</p> 
    )
  );
};

export default ProductWrapper;
