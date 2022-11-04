import { HeroVerProducto } from "../components/verproducto/HeroVerProducto"

import React, { Fragment } from 'react'
import { Footer } from '../components/home/Footer'
import { Header } from '../components/home/Header'
import { DetalleProductos } from "../components/verproducto/DetalleProductos"



const verproductos = () => {
  return (
    <Fragment>

      <Header />
      <main>
        <HeroVerProducto />
        <DetalleProductos />
      </main>
      <Footer />
    </Fragment>
  )
}

export default verproductos
