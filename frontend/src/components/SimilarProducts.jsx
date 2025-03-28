import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useProductStore from '../store/useProductStore'
import ProductItemBlock from './ProductItemBlock'

const SimilarProducts =  () => {
    const { currentProduct } = useProductStore()
    const [ similarProducts, setSimilarProducts ] = useState([])

    useEffect(()=>{
        const fetchData = async (collection_id, id) => {
            try {
              const response = await axios.get(
                'http://localhost:5000/api/product/getSimilarProducts', 
                {
                    params: {
                    collection_id,
                    id  
                    }
                }
              );
          
              if (response.data.success) {
                console.log('Similar Products:', response.data.data);
                setSimilarProducts(response.data.data);
                return response.data.data; 
              }
            } catch (err) {
              console.error('Error fetching similar products:', err);
            }
          };

        fetchData(currentProduct.collection_id, currentProduct.id)
    }, [])

  return (
    <div className="py-8 ">
        <div className="flex justify-between items-center pb-4 ">
          <h3 className="text-[26px] text-white">You Also Might Like</h3>
          <p className="text-[18px] text-[#FFFFFF60]">See more <span class="arrow">&#8594; </span> </p>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {similarProducts.map((product, index) => (
            <ProductItemBlock key={index} product={product}/>
          ))}
        </div>
    </div>
  )
}

export default SimilarProducts
