import { useState } from 'react'
import { Disclosure, Popover, Tab } from '@headlessui/react'
import {
  HeartIcon, MinusIcon, PlusIcon, ShoppingCartIcon,
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import { images } from '../../constants/images'
import Image from 'next/image'
import { productDetalle, relatedProducts } from '../../constants/arrays'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export const DetalleProductos = () => {



  return (
    <div className="bg-white">



      <main className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}
            <Tab.Group as="div" className="flex flex-col-reverse">
              {/* Image selector */}
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-6">
                  {productDetalle.images.map((image) => (
                    <Tab
                      key={image.id}
                      className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                    >
                      {({ selected }) => (
                        <>
                          <span className="sr-only"> {image.name} </span>
                          <span className="absolute inset-0 overflow-hidden rounded-md">
                            <Image src={image.src} alt="" className="h-full w-full object-cover object-center" />
                          </span>
                          <span
                            className={classNames(
                              selected ? 'ring-indigo-500' : 'ring-transparent',
                              'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                {productDetalle.images.map((image) => (
                  <Tab.Panel key={image.id}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover object-center sm:rounded-lg"
                    />
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{productDetalle.name}</h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-lg tracking-tight text-gray-900 font-bold">ESCOCIA | 0.75 Lts.</p>
              </div>

              {/* Reviews */}
              <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">

                  </div>

                </div>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>


              </div>

              <form className="mt-6">


                <div className="mt-10 flex">


                  <div className="flex max-w-xs flex-1 text-2xl font-bold text-primary-400  sm:w-full">
                    $ 99,99
                  </div>

                  <div
                    className="items-center justify-center rounded-md py-3 px-3 text-gray-400 line-through"
                  >
                    $99,99
                  </div>



                </div>

                <span className="isolate inline-flex rounded-md shadow-sm mt-12">
                  <button
                    type="button"
                    className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  >
                    -
                  </button>
                  <button
                    type="button"
                    className="relative -ml-px inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  >
                    +
                  </button>
                </span>


                <button
                  type="submit"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-primary-500 py-3 px-8 text-base font-medium text-white hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full mt-8"
                >
                  Agregar
                </button>
              </form>

            </div>
          </div>

          <section aria-labelledby="related-heading" className="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0">
            <h2 id="related-heading" className="text-xl font-bold text-gray-900">
              Productos Similares
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {relatedProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md  group-hover:opacity-75 lg:aspect-none lg:h-80 ">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={product.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.price}</p>
                    </div>
                    <ShoppingCartIcon className="text-sm font-medium text-gray-900 h-6 w-6" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>


    </div>
  )
}
