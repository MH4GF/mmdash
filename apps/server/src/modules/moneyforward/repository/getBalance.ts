import { MoneyForwardBalance } from "../../../graphql/types.generated";

export const getBalance = (): MoneyForwardBalance => {
  return {
    id: "xxx",
    income: 100,
    expense: 100,
  };
};
