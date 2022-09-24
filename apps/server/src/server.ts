import { ApolloServer } from "apollo-server";

import { typeDefs } from "./graphql/typedefs.generated";
import { resolvers } from "./resolvers";

export const server = new ApolloServer({ typeDefs, resolvers });
