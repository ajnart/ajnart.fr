import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookies } from 'cookies-next';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider, Header } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import * as React from 'react';
import { FooterCentered } from '../components/Footer';
import { HeaderContent } from '../components/HeaderContent';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookies('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <ChakraProvider>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
            <NotificationsProvider>
              <Header height={60} p="xs">
                <HeaderContent />
              </Header>
              <Component {...pageProps} />
              <FooterCentered links={[]} />
            </NotificationsProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </ChakraProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
