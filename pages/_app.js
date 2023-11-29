import '@/styles/globals.scss';
import { Provider } from 'react-redux';
import store from './store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Head from 'next/head';
let persistor = persistStore(store);
 function MyApp({ Component, pageProps }) {
    return (
        <>
          <Head>
            <title>Shoppay</title>
            <meta
              name="description"
              content="Shoppay-online shopping service for clothing shop."
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
         
          <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                  <Component {...pageProps} />
              </PersistGate>
          </Provider>
        </>
      );
    }
export default MyApp