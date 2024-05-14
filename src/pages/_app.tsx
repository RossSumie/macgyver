import AppProvider from 'hooks';
import { AppProps } from 'next/app';
import { GlobalStyles } from 'styles';
import { AnswersProvider } from 'hooks/answerContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <AnswersProvider>
                <AppProvider>
                    <Head>
                        <link
                            rel="preconnect"
                            href="https://fonts.googleapis.com"
                        />
                        <link
                            rel="preconnect"
                            href="https://fonts.gstatic.com"
                            crossOrigin="anonymous"
                        />
                        <link
                            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
                            rel="stylesheet"
                        />
                    </Head>
                    <Component {...pageProps} />
                </AppProvider>
            </AnswersProvider>
        </>
    );
}

export default MyApp;
