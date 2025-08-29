import React from 'react'

const Title = ({title,desc}) => {
  return (
    <>

    <h1 className='text-3xl font-medium sm:text-5xl'>{title}</h1>
    <p className='max-w-lg text-center text-gray-500 dark:text-white/75 mb-6'>{desc}</p>
      
    </>
  )
}

export default Title
