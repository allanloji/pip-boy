import React from 'react';
import Head from 'next/dist/next-server/lib/head';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: any) => (
  <React.Fragment>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
    </Head>
    <style jsx global>
      {`
        body {
          margin: 0;
        }
      `}
    </style>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.Fragment>
);

export default MyApp;
