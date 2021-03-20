import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import store from './store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
