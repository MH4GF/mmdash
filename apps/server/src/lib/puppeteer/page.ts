import puppeteer from 'puppeteer'

export type Page = puppeteer.Page

export const createNewPage = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  page.setDefaultNavigationTimeout(60 * 1000)
  page.setUserAgent(
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36',
  )
  return page
}
