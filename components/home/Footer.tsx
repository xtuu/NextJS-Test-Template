import React from 'react'
import { navigationFooter } from '../../constants/arrays'





export const Footer = () => {
  return (
    <footer className="bg-[#333333] mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
        {navigationFooter.main.map((item) => (
          <div key={item.name} className="px-5 py-2">
            <a href={item.href} className="text-base text-white hover:text-gray-900">
              {item.name}
            </a>
          </div>
        ))}
      </nav>
      <p className="mt-8 text-center text-base text-gray-400">   Copyright © 2020 Bodebar. Todos los Derechos Reservados. Desarrollado por Avila Tek </p>

    </footer>
  )
}




