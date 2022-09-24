import { getBalance } from '../getBalance'

describe('getBalance', () => {
  it('should return balance', () => {
    expect(getBalance()).toEqual({
      id: 'xxx',
      income: 100,
      expense: 100,
    })
  })
})
