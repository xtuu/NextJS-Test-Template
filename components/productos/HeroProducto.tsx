import { Fragment, useState } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { images } from '../../constants/images'
import Image from 'next/image'
import { Pagination } from './Pagination'
import Link from 'next/link'
import { products, subCategories } from '../../constants/arrays'






const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export const HeroProducto = () => {


  return (
    <Fragment>

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

      <main className='mx-auto max-w-7xl sm:px-6 '>

          <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>

            <form className='hidden lg:block bg-[#333333] text-white px-12 py-8'>

              <h3 className='text-white mb-6'>Categorias</h3>
              <ul className='space-y-4 border-b border-gray-200 pb-6 text-sm text-white'>
                {subCategories.map((category) => (
                  <li key={category.name} className={classNames()}>
                    <a href={category.href}>{category.name}</a>
                  </li>
                ))}
              </ul>

              <h3 className='text-white mb-3 mt-4'>Precio</h3>
              <div className='space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-white'>
                $ _____ - _____
              </div>
              <h3 className='text-white mb-3 mt-4'>Ofertas</h3>
            </form>

            <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 lg:col-span-3 lg:gap-x-8 p-8'>
              {products.map((product) => (
                <div key={product.id} className='group relative'>
                  <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md  group-hover:opacity-75 lg:aspect-none lg:h-80 '>
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                    />
                  </div>
                  <div className='mt-4 flex justify-between'>
                    <div>
                      <h3 className='text-sm text-gray-700'>
                        <Link href={product.href}>

                          {product.name}
                        </Link>
                      </h3>
                      <p className='mt-1 text-sm text-gray-500'>{product.price}</p>
                    </div>
                    <ShoppingCartIcon className='text-sm font-medium text-gray-900 h-6 w-6' />
                  </div>
                </div>
              ))}
              <Pagination />
            </div>
          </div>

      </main>
    </Fragment>
  )
}
