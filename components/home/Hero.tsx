import Image from 'next/image';
import { Fragment } from 'react'
import Carousel from 'nuka-carousel';
import { images } from '../../constants/images';

export const Hero = () => {
  return (

    <Fragment>

      <div className="relative">
        <div className="absolute inset-x-0 bottom-0" />
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative sm:overflow-hidden">
            <Fragment>
              <Carousel
                className='sm:mt-2 lg:block relative w-0 flex-1'
                autoplay={true}
                animation='fade'
                wrapAround={true}
                autoplayInterval={2500}
                renderCenterLeftControls={null}
                renderCenterRightControls={null}
                renderBottomCenterControls={null}
              >


                <Image
                  className='relative inset-0 h-96 w-auto object-cover'
                  src={images.bm6}
                  alt='Bar-Mercedes'
                />
                <Image
                  className='relative inset-0 h-96 w-auto object-cover'
                  src={images.bm4}
                  alt='Bar-Mercedes'
                />
                <Image
                  className='relative inset-0 h-96 w-auto object-cover'
                  src={images.bm3}
                  alt='Bar-Mercedes'
                />
              </Carousel>
            </Fragment>
          </div>
        </div>
      </div>

    </Fragment>
  )
}
