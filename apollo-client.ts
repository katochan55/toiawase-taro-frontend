import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://dummy.com", // TODO: set endpoint
  cache: new InMemoryCache(),
});

export default client;
