import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/clbo8u7kg08o401ungfcxegr2/master',
    cache: new InMemoryCache()
});