import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function ProductTable({products}) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Image
        </th>
        <th scope="col" className="px-6 py-3">
          Product name
        </th>
        <th scope="col" className="px-6 py-3">
          Brand
        </th>
        <th scope="col" className="px-6 py-3">
          Category
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Created At
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
        {products?.map((product, index) => (
      <tr key={index} 
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className='px-6 py-4'>
            <Image 
            src={product.imageUrls[0] ?? card} 
            alt={product.name}
            height={100} 
            width={100}
            className='max-h-20 w-auto'
            />
        </td>

        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {product.name}
        </th>
        <td className="px-6 py-4">
          {product.brand}
        </td>
        <td className="px-6 py-4">
          {product.category}
        </td>
        <td className="px-6 py-4">
          Rs. {product.price}
        </td>
        <td className="px-6 py-4">
          {product.createdAt}
        </td>
        <td className="px-6 py-4">
          <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
        </td>
        
      </tr>
    ))}
    </tbody>
  </table>
</div>
  )
}

export default ProductTable;

