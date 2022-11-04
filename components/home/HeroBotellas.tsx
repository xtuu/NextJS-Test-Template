import Image from 'next/image';
import { Fragment } from 'react'
import { images } from '../../constants/images';
import Carousel, { Alignment } from 'nuka-carousel';

import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline'


export const HeroBotellas = () => {
  return (


    <div className="relative">
      <div className="absolute inset-x-0 bottom-0" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className='text-center content-center items-center text-2xl py-8'>
          Best Sellers
        </div>
        <div className="relative sm:overflow-hidden">
          <Fragment>
            <Carousel
              className='sm:mt-2 lg:block relative w-0 flex-1'
              animation='zoom'
              slidesToShow={3}
              wrapAround={true}
              defaultControlsConfig={{
                prevButtonStyle: { backgroundColor: 'white' },
                nextButtonStyle: { backgroundColor: 'white' },
                nextButtonText: <ArrowRightCircleIcon className='h-12 w-12 text-primary-500' />,
                prevButtonText: <ArrowLeftCircleIcon className='h-12 w-12 text-primary-500' />,
                pagingDotsClassName: ' Hola',
              }}
              cellAlign={Alignment.Center}
            >
              <Image
                className='relative inset-0 h-96 w-auto object-cover'
                src={images.b7}
                alt='Bar-Mercedes'
              />
              <Image
                className='relative inset-0 h-96 w-auto object-cover'
                src={images.b8}
                alt='Bar-Mercedes'
              />
              <Image
                className='relative inset-0 h-96 w-auto object-cover'
                src={images.b9}
                alt='Bar-Mercedes'
              />
              <Image
                className='relative inset-0 h-96 w-auto object-cover'
                src={images.b10}
                alt='Bar-Mercedes'
              />
              <Image
                className='relative inset-0 h-96 w-auto object-cover'
                src={images.b5}
                alt='Bar-Mercedes'
              />
              <Image
                className='relative inset-0 h-96 w-auto object-cover'
                src={images.b6}
                alt='Bar-Mercedes'
              />
            </Carousel>
          </Fragment>
        </div>
      </div>
    </div>
  )
}
