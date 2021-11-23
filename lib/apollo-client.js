import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: 'https://graphql.datocms.com/',
});

const authLink = setContext((_, { headers }) => {
    const token = process.env.DATOCMS_API_TOKEN;
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${token}`,
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;