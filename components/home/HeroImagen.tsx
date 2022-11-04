import Image from "next/image"
import { images } from "../../constants/images"


export const HeroImagen = () => {
  return (


      <main>


          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 " />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative sm:overflow-hidden ">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full object-cover"
                    src={images.bm5}
                    alt="Bar - Mercedes"
                  />

                </div>
                <div className="ml-80 relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-right mr-4.5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-secondary-100"> Lorem ipsum</span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-sm text-right text-xl text-secondary-100 sm:max-w-3xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates saepe nulla expedita non vero veritatis quas libero iure temporibus, sed ratione corporis magni labore quidem tenetur nesciunt sequi distinctio aut?
                  </p>

                </div>
              </div>
            </div>
          </div>





      </main>

  )
}
