import React from 'react'
import ProductCard from '@/components/properties/Card';
import { getProperties } from '@/api/properties';
import PropertyDrawer from '@/components/properties/Drawer';
import PropertyFilters from '@/components/properties/Filters';



async function PropertiesPage({searchParams}) {
  const response = await getProperties(await searchParams);
console.log(await searchParams)
  const products = response?.data;
  
  return (
    <section>
      <h1 className='text-3xl font-bold underline pt-6 text-center'>Popular Properties</h1>
      <PropertyFilters/>
    <div className='container grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-8 '>
     {
      products?.map((product, index)=>(
        <ProductCard key={index} product={product}/>
      ))
     }
      </div> 
      </section>
  )
}

export default PropertiesPage;