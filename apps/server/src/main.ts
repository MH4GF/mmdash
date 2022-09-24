import { readFileSync } from "fs";

import { ApolloServer } from "apollo-server";

import type { Resolvers } from "./graphql/resolversTypes.generated";

const typeDefs = readFileSync("./graphql/schema.graphql", "utf8");

const resolvers: Resolvers = {
  Query: {
    hello: () => "world",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
