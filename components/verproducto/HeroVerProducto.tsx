import { images } from "../../constants/images"
import Image from 'next/image';

export const HeroVerProducto = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-x-0 bottom-0 h-1/2' />
      <div className='mx-auto max-w-7xl sm:px-6'>
        <div className='relative  sm:overflow-hidden'>
          <div className='absolute inset-0'>
            <Image
              className='h-full w-full object-cover'
              src={images.bm7}
              alt='People working on laptops'
            />

          </div>
          <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
            <h1 className='text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl'>
              <span className='block text-white'>PRODUCTOS</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
