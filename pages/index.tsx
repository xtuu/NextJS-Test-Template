import React from 'react';

import Head from 'next/head';
import { Header } from '../components/home/Header';
import { Hero } from '../components/home/Hero';
import { HeroBotellas } from '../components/home/HeroBotellas';
import { HeroImagen } from '../components/home/HeroImagen';
import { ListLicores } from '../components/home/ListLicores';
import { Footer } from '../components/home/Footer';

function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>BodegaBar - Las Mercedes</title>
      </Head>
      <Header />

      <main>
        <Hero />
        <HeroBotellas />
        <HeroImagen />
        <ListLicores />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;
