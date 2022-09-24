import { readFileSync } from "fs";

import { ApolloServer } from "apollo-server";

import { resolvers } from "./resolvers";

const typeDefs = readFileSync("./graphql/schema.graphql", "utf8");

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
