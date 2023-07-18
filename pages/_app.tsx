// @ts-nocheck

import React from "react";
import App, { AppContext, AppInitialProps } from "next/app";
import Head from "next/head";
import { Router } from "next/router";
import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";

import { IntlProvider } from "react-intl";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";

import PageLayout from "components/PageLayout";
import { AppStateProvider } from "contexts/AppStateContext";
import { AuthContextProvider } from "contexts/AuthContext";
import ThemeContextProvider from "contexts/ThemeContext";
import { getLocale, getMessages } from "i18n";
import ThemeProvider from "theme/Provider";
import "../styles/global.css";
import { QuizAddStateProvider } from "contexts/QuizAddStateContext";
import { NextComponentType, NextPageContext } from "next";

const queryCache = new QueryCache();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      // refetchOnMount: false,
      keepPreviousData: false,
      staleTime: Infinity,
    },
  },
  queryCache,
});

class MyApp extends App<{
  locale: string;
  messages: any;
  router: Router;
}> {
  static async getStaticProps({
    Component,
    ctx,
  }: {
    Component: any;
    ctx: any;
  }): Promise<{
    pageProps: any;
    locale: string;
    messages: any;
  }> {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const locale = (await getLocale(ctx)) || "en";
    const messages = await getMessages(locale);
    return {
      pageProps,
      locale,
      messages,
    };
  }

  static async getInitialProps(context: AppContext): Promise<any> {
    const fullProps = await App.getInitialProps(context);
    return fullProps;
  }

  // componentDidMount(): void {
  //   console.log("Mount");
  // }

  // componentDidUpdate(
  //   prevProps: Readonly<
  //     {
  //       locale: string;
  //       messages: any;
  //       router: Router;
  //     } & AppInitialProps<{}> & {
  //         Component: NextComponentType<NextPageContext, any, any>;
  //         router: Router;
  //         __N_SSG?: boolean | undefined;
  //         __N_SSP?: boolean | undefined;
  //       }
  //   >,
  //   prevState: Readonly<{}>,
  //   snapshot?: any,
  // ): void {
  //   console.log("Update");
  // }

  render() {
    const {
      Component,
      pageProps: { session, ...pageProps },
      locale,
      messages,
    } = this.props;

    return (
      <>
        <Head>
          <title>Formative</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        {/* <ThemeContextProvider> */}

        <ThemeProvider>
          <IntlProvider locale={locale || "en"} messages={messages}>
            <SessionProvider session={session}>
              <AuthContextProvider>
                <QueryClientProvider client={queryClient}>
                  <QuizAddStateProvider>
                    <AppStateProvider>
                      <SnackbarProvider
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                      >
                        <Hydrate state={pageProps.dehydratedState}>
                          <PageLayout>
                            <Component {...pageProps} />
                          </PageLayout>
                        </Hydrate>
                      </SnackbarProvider>
                    </AppStateProvider>
                  </QuizAddStateProvider>
                  <ReactQueryDevtools initialIsOpen={false} />
                </QueryClientProvider>
              </AuthContextProvider>
            </SessionProvider>
          </IntlProvider>
        </ThemeProvider>
        {/* </ThemeContextProvider> */}
      </>
    );
  }
}

export default React.memo(MyApp);
