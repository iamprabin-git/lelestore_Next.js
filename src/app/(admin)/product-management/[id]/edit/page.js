import { getCategories, getPropertyById } from '@/api/properties';
import PropertyForm from '@/components/properties/Form';
import React from 'react'

async function ProductEditPage({params}) {
  const id = (await params).id;
  const response= await getPropertyById(id);
  const categoriesResponse = await getCategories();
  return (
    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Edit <span className='text-amber-400 italic'>{response?.data?.name}</span>
        </h2>
        <PropertyForm 
        id={id}
        product={response?.data} 
        categories={categoriesResponse?.data}/>
      </div>
  )
}

export default ProductEditPage;