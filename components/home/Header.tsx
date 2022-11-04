import Image from 'next/image'
import logo from '../../public/images/logoBarMercedes.png'
import { Popover } from '@headlessui/react'
import { Bars3Icon, ShoppingCartIcon, ArrowRightOnRectangleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import { Navbar } from './Navbar'
import Link from 'next/link'


export const Header = () => {

  return (

    <Popover className='relative bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <div className='flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link href='/'>
              <Image
                className='text-center mx-auto'
                width={246.15}
                height={96}
                src={logo}
                alt='No - imagen'
              />
            </Link>


          </div>
          <div className='-my-2 -mr-2 md:hidden'>
            <Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>

              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </Popover.Button>
          </div>

          <div className='hidden md:flex'>
            <div className='relative w-96 text-gray-400 focus-within:text-gray-600'>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center'>
                <MagnifyingGlassIcon className='h-5 w-5 text-black' aria-hidden='true' />
              </div>
              <input
                type='search'
                className='block h-full w-full border-transparent border-b-black py-3 px-fit text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
              />
            </div>


          </div>

          <div className='hidden items-center justify-end md:flex md:flex-1 lg:w-0 space-x-6'>
            <Link href='/productos' className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
              Productos
            </Link>
            <Link href='/productos' className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
              Monedas
            </Link>
            <Link href='/productos' className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer'>
              <ShoppingCartIcon className='text-black w-6 h-6' />
            </Link>
            <Link href='/productos' className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 cursor-pointer'>
              <ArrowRightOnRectangleIcon className='w-6 h-6 text-black' />
            </Link>
          </div>
        </div>
        <Navbar />
      </div>

    </Popover>

  )
}
