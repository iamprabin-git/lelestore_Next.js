import React from 'react'
import Image from 'next/image'
import card from '../../assets/images/product-card.jpg'

function ProductCard() {
  return (
    <div className='w-max h-max rounded-2xl dark:shadow dark:shadow-amber-50 px-5 py-4'>
        <Image src={card} alt='image' height={500} width={500} className='max-h-32 w-full'/>
    </div>
  )
}

export default ProductCard;