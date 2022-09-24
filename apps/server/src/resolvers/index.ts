import { Resolvers } from "../graphql/resolversTypes.generated";

export const resolvers: Resolvers = {
  Query: {
    hello: () => "world",
  },
};
