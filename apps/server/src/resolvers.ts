import type { Resolvers } from './graphql/types.generated'
import { moneyForwardBalanceResolver } from './modules/moneyforward'

export const resolvers: Resolvers = {
  Query: {
    moneyForwardBalance: moneyForwardBalanceResolver,
  },
}
