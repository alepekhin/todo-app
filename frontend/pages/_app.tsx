import { ApolloProvider } from '@apollo/client'
import { client } from '../utils'
import type { AppProps } from 'next/app'

export default ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
