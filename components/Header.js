import Head from 'next/head'
export const siteName = "Football News"

export default function Header() {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css' />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <title>{siteName}</title>
        </Head>
    );
}