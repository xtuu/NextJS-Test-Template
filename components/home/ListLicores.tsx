import Image from "next/image"
import { products } from "../../constants/arrays"
import { ShoppingCartIcon } from '@heroicons/react/24/outline'




export const ListLicores = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className='text-center content-center items-center text-2xl py-8'>
          Licores
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
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
      </div>
    </div>
  )
}
