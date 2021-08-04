import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
