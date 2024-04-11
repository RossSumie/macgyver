import AppProvider from 'hooks';
import { AppProps } from 'next/app';
import { GlobalStyles } from 'styles';
import { AnswersProvider } from 'hooks/answerContext';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <AnswersProvider>
                <AppProvider>
                    <GlobalStyles />
                    <Component {...pageProps} />
                </AppProvider>
            </AnswersProvider>
        </>
    );
}

export default MyApp;
