import { getProperties, getPropertyByUser } from '@/api/properties';
import ProductTable from '@/components/properties/Table';
import React from 'react'

async function ProductManagementPage() {
    const response = await getProperties();
  return (
    <div className='py-5 px-4'>
        <ProductTable products={response?.data}/> 
    </div>
  )
}

export default ProductManagementPage;