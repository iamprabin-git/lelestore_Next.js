import { getProperties, getPropertyByUser } from '@/api/properties';
import ProductTable from '@/components/properties/Table';
import Link from 'next/link';
import React from 'react'

async function ProductManagementPage() {
    const response = await getProperties();
  return (
    <section className='py-3 pr-5'>
      <div className='flex justify-between items-center pb-5 px-3'>
        <h1 className='text-2xl font-bold'>Product Management</h1>
        <Link href="/product-management/add" className='btn btn-primary bg-slate-200 rounded-lg px-3 py-1 dark:bg-slate-800 dark:text-white hover:bg-slate-400'>Add New Product +</Link>
      </div>
        <ProductTable products={response?.data}/> 
    </section>
  )
}

export default ProductManagementPage;