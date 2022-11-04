import React, { Fragment } from 'react'
import { Footer } from '../components/home/Footer'
import { Header } from '../components/home/Header'
import { HeroProducto } from '../components/productos/HeroProducto'



const productos = () => {
  return (
    <Fragment>

      <Header />
      <main>
      <HeroProducto /> 


      </main>
      <Footer />
    </Fragment>
  )
}

export default productos
