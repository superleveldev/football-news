<h1 align=center> ⚽ Football News ⚽ </h1>

![Site preview with different devices](https://www.datocms-assets.com/58055/1637739554-devices.png)

<h3 align=center>This is a <a href='https://jamstack.org/' target='_blank'>Jamstack</a> website created with <a href='https://nextjs.org' target='_blank'>Next JS</a>.</h3>
<h3 align=center>🔴 Live version available on <a href='https://football-news-snowy.vercel.app/' target='_blank'>here</a></h3>

## Features
- Multi-language support
- Include different approaches 
  - [CSR (Client Side Rendering)](#csr)
  - [SSR (Server Side Rendering)](#ssr), 
  - SSG (Static Site Generation)(#ssg)
- Google authenticated users can comment to contents.

## Table of Contents
* Design Files
* How It Works

## 📐 Design Files 

 You can access design files on [Figma](https://www.figma.com/file/1vEIi8WwGmenYVrHeaAYNT/FootballNews)

## ⚙ How it works

![Concept Schema](https://www.datocms-assets.com/58055/1637739534-schemas1.jpg)

- This project developed with [NextJS](https://nextjs.org/) works on [Vercel](https://vercel.com/)
- [DatoCMS](https://www.datocms.com/) stores the news, matches, player statistics datas.
- Server and clients communicate with DatoCMS through [Apollo](https://www.apollographql.com/) (a [GraphQL](https://graphql.org/) library)
- Users can authenticate with their Google accounts over [Auth0](https://auth0.com/) so they can comment to contents.
- A [Redis DB](https://redis.io/) works on [Upstash](https://upstash.com/) stores the user comments.

### SSR (Server Side Rendering) <span id="ssr"></span>

![Server Side Rendering](https://www.datocms-assets.com/58055/1637739542-schemas2.jpg)

For homepage lastest data fetch from DatoCMS then server renders page according this datas. Finally page are served the clients.

```javascript
//index.js
import Home from "./Home";
import { gql } from "@apollo/client";
import client from "../lib/apollo-client";

export default function FootballNews({ data }) {
    return <Home NewsData={data.NewsData} GroupsData={data.GroupsData} PlayerData={data.PlayerData} />
}

export async function getServerSideProps({ locale }) {
    // Get data with GraphQL
    const { data } = await client.query({
        query: gql`...`,
    });
    return { props: { data } }
}    
```

### CSR (Client Side Rendering) <span id="csr"></span>

![Client Side Rendering](https://www.datocms-assets.com/58055/1637739547-schemas3.jpg)

After page loaded on client side, fetchs for matches data then renders component on client side according to response datas.

```javascript
// components/Matches.js

import { useQuery, gql } from "@apollo/client";
import Loading from "./Loading"

const ALL_MATCHES = gql`...`;

export default function Matches() {
    // Fetch data on client side
    const { data, loading, error } = useQuery(ALL_MATCHES);
    if (loading || error) {
        return <Loading />
    }
    return ...
}
```

### SSG (Static Site Generation) <span id="ssg"></span>

Blog pages were created at build time. With [next export](https://nextjs.org/docs/advanced-features/static-html-export) they converted to static HTML, which can be run standalone without the need of a Node.js server.

```javascript
// post/[slug].js

function Post({ data }) {
    return <>...</>
}

export async function getStaticPaths() {
   // Define a list of paths that have to be rendered to HTML at build time
    const { data } = await client.query({
        query: gql`...`,
    });

    return {
        paths: data.map(item => {
            return {
                params:
                {
                    slug: `${slug(item.title)}-${item.id}`
                },
                locale: item.lang
            }
        }),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    //Next.js will pre-render this page at build time using the props returned by getStaticProps.
    const { data } = await client.query({
        query: gql`...`,
    });
    return { props: { data } }
}

export default Post;
```
