import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

export const Pagination = () => {
  return (
    <div className='ml-96 flex items-center justify-start px-4 py-3 sm:px-6'>
      <div className='flex flex-1 justify-between sm:hidden'>
        <a
          href='#'
          className='relative inline-flex items-center rounded-md  px-4 py-2 text-sm font-medium text-primary-500 '
        >
          Previous
        </a>
        <a
          href='#'
          className='relative ml-3 inline-flex items-center px-4 py-2 text-sm font-medium text-primary-500'
        >
          Next
        </a>
      </div>
      <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>

        <div>
          <nav className='isolate inline-flex -space-x-px ' >
            <a
              href='#'
              className='relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 focus:z-20'
            >
              <span className='sr-only'>Previous</span>
              <ChevronLeftIcon className='h-5 w-5 text-primary-500'  />
            </a>
            <a
              href='#'
              aria-current='page'
              className='relative z-10 inline-flex items-center text-primary-500 bg-indigo-50 px-4 py-2 text-sm font-medium  focus:z-20'
            >
              1
            </a>
            <a
              href='#'
              className='relative inline-flex items-center text-primary-500 px-4 py-2 text-sm font-medium focus:z-20'
            >
              2
            </a>
            <a
              href='#'
              className='relative hidden items-center text-primary-500 px-4 py-2 text-sm font-medium  focus:z-20 md:inline-flex'
            >
              3
            </a>

            <a
              href='#'
              className='relative inline-flex items-center px-2 py-2 text-sm font-medium focus:z-20'
            >
              <span className='sr-only'>Next</span>
              <ChevronRightIcon className='h-5 w-5 text-primary-500'  />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
