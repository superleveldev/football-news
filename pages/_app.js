import '../public/assets/css/font-awesome.css';
import '../public/assets/css/main.css';
import '../public/assets/css/loading.css';
import '../public/assets/css/error.css';
import App from 'next/app'
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
    return <Auth0Provider
        domain={process.env.AUTH_DOMAIN}
        clientId={process.env.AUTH_CLIENTID}
        redirectUri={process.env.NEXT_PUBLIC_URL}
    >
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    </Auth0Provider>
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps }
}

export default MyApp


