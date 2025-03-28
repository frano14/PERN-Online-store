import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useProductStore from '../store/useProductStore';
import ProductWrapper from '../components/ProductWrapper';
import SimilarProducts from '../components/SimilarProducts';
import Reviews from '../components/Reviews';

const SingleProductPage = () => {
    const {id} = useParams();

    const { currentProduct, fetchCurrentProduct } = useProductStore()
    
    useEffect(()=>{
        fetchCurrentProduct(id)
    }, [id])

    
    if (!currentProduct) {
        return <p>Loading product...</p>;
    }

  return (
    <div className='py-8 w-[1200px] mx-auto'>
      {currentProduct ? (
        <>
          <ProductWrapper/>
          <Reviews/>
          <SimilarProducts/>
        </>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  )
}

export default SingleProductPage
