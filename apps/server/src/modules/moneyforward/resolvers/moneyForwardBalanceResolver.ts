import type { QueryResolvers } from '../../../graphql/types.generated'
import { getBalance } from '../repository'

export const moneyForwardBalanceResolver: QueryResolvers['moneyForwardBalance'] = {
  resolve: () => {
    return getBalance()
  },
}
