import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const SingleProductPage = () => {
    const {id} = useParams();
    
    useEffect(()=>{
        const fetchData = async () => {
            const response = await axios.get("http://localhost:5000/api/product/" + id);
            console.log(response.data.data)
        }

        fetchData();
    }, [])

  return (
    <div>
      radi
    </div>
  )
}

export default SingleProductPage
