import React from 'react'
import Image from 'next/image'
import card from '../../assets/images/product-card.jpg'

function ProductCard({product}) {
  return (
    <div className='w-full h-max rounded-2xl dark:shadow dark:shadow-amber-50 px-5 py-4 border border-b-amber-950 '>
       <div className='flex justify-center'>
        <Image src={card} alt='image' height={500} width={500} className='max-h-40 w-auto'/>
        </div>
    
    <div className='py-3 '>
        <h2 className='text-2xl font-semibold justify-center'>{product.name}</h2>
       <div>
  <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">{product.category}</span>
  <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">{product.brand}</span>
</div>

        <p className='py-2'>Rs.{product.price}</p>
        <button className='px-4 py-2 bg-amber-400 rounded-3xl text-white'>Add to Cart</button>
    </div>
    </div>
  )
}

export default ProductCard;