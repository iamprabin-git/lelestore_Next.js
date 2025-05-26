import React from 'react'

function ProductLayout({children}) {
  return (
    <div className='bg-gray-100 dark:bg-slate-700'>
        <div className='max-w-screen-xl container mx-auto px-4 '> {children}</div>

    </div>
  );
}

export default ProductLayout;