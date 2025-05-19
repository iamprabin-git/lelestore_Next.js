import PropertyForm from '@/components/properties/Form';
import React from 'react'

function ProductAddPage() {
  return (
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
    <PropertyForm />
    </div>
    </section>
  )
}

export default ProductAddPage;