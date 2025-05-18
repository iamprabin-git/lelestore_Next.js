"use client"
import React from 'react'

function ErrorLayout({error}) {
  return (
    <div>{error.message}</div>
  )
}

export default ErrorLayout;