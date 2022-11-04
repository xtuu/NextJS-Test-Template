import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import { AppProps } from 'next/app';
import '../styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      NProgress.start();
    });

    Router.events.on('routeChangeComplete', () => {
      NProgress.done();
    });

    Router.events.on('routeChangeError', () => {
      NProgress.done();
    });
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
