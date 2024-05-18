import React from 'react'

const ImageLoader:React.FC = () => {
  return (
    <div className='w-full h-40 px-8 flex flex-col gap-4'>
        <div className='animate-pulse bg-gray-400 w-full h-10'>
        </div>
        <div className='animate-pulse bg-gray-400 w-full h-8'>
        </div>
        <div className='animate-pulse bg-gray-400 w-1/2 h-8'>
        </div>
    </div>
  )
}

export default ImageLoader