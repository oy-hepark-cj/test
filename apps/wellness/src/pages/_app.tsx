import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <BrowserRouter>
      <Head>
        <title>Welcome to poc!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </BrowserRouter>
  );
}

export default CustomApp;
