import { ApolloClient, InMemoryCache, gql, NormalizedCacheObject, makeVar } from "@apollo/client";

export const typeDefs = gql`
  extend type Query {
    user: string
  }
`;

export const userVar = makeVar<string>('');

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  typeDefs,
});
