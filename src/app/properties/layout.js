import React from 'react'
import axios from 'axios'
import ProductCard from '@/components/properties/Card';

async function PropertiesPageLayout() {
  const response = await axios.get("https://node-20250302.vercel.app/api/products");

  const products = response.data;
  
  return (
    <div className='max-w-screen-xl container mx-auto'>
     <h1 className='text-4xl font-bold'>PropertiesPage</h1> 
     <ProductCard/>
     {
      products?.map((product, index)=>(
        <h2 key={index} className='text-2xl font-bold'>{product.name}</h2>
      ))
     }
      </div> 
  )
}

export default PropertiesPageLayout;