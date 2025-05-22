"use client"
import React, { useState } from 'react'
import PropertyDrawer from './Drawer';

function PropertyFilters() {
    const [showFilters, setShowFilters] = useState(false);
  return (
    <div className='container '>
        <button onClick={() => setShowFilters(!showFilters)} className='bg-slate-600 text-white items-center border rounded-lg px-3 py-1 hover:bg-slate-100 hover:text-black'>Filters</button>
        <PropertyDrawer showFilters={showFilters} setShowFilters={setShowFilters}/>   
    </div>
  )
}

export default PropertyFilters;