import type { MoneyForwardBalance } from '../../../graphql/types.generated'
import type { Page } from '../../../lib/puppeteer'
import { createNewPage } from '../../../lib/puppeteer'

const signIn = async (page: Page) => {
  await page.goto('https://id.moneyforward.com/sign_in/email')
  await page.type("input[name='mfid_user[email]']", process.env.MONEY_FORWARD_EMAIL)
  await page.click("input[type='submit']")
  await page.type("input[name='mfid_user[password]']", process.env.MONEY_FORWARD_PASSWORD)
  await page.click("input[type='submit']")

  await page.goto('https://moneyforward.com/sign_in')
  await page.click("input[type='submit']")
}

let alreadySignInPage: Page | null

const signInPage = async () => {
  if (alreadySignInPage) {
    return alreadySignInPage
  }

  const page = await createNewPage()
  await signIn(page)
  alreadySignInPage = page
  return page
}

export const getBalance = async (): Promise<MoneyForwardBalance> => {
  const page = await signInPage()

  const income = await page.$eval(
    '#monthly_total_table_home > tbody > tr:nth-child(1) > td',
    (el) => el.textContent,
  )
  const expense = await page.$eval(
    '#monthly_total_table_home > tbody > tr:nth-child(2) > td',
    (el) => el.textContent,
  )

  return {
    id: 'xxx',
    income: Number(income?.replace(/[^0-9]/g, '')),
    expense: Number(expense?.replace(/[^0-9]/g, '')),
  }
}
