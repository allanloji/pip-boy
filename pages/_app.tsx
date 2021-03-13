import React from 'react';
import Head from 'next/dist/next-server/lib/head';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Amplify } from 'aws-amplify';
import setupEnv from 'utils/setupEnv';

const config = setupEnv();
const queryClient = new QueryClient();
Amplify.configure({ ...config, ssr: true });

const MyApp = ({ Component, pageProps }: any) => (
  <React.Fragment>
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta
        name='viewport'
        content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
      />
      <meta name='description' content='Description' />
      <meta name='keywords' content='Keywords' />
      <title>Pip-Boy</title>

      <link rel='manifest' href='/manifest.json' />
      <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
      <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
      <link rel='apple-touch-icon' href='/apple-icon.png'></link>
      <meta name='theme-color' content='#317EFB' />
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
