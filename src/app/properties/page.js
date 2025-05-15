import React from 'react'
import ProductCard from '@/components/properties/Card';
import { getProperties } from '@/api/properties';



async function PropertiesPage() {
  const response = await getProperties();

  const products = response?.data;
  
  return (
    <div className='container grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-8 '>
     {
      products?.map((product, index)=>(
        <ProductCard key={index} product={product}/>
      ))
     }
      </div> 
  )
}

export default PropertiesPage;