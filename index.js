const puppeteer = require('puppeteer')
const DATA = require('./data')

let autoLogin = async() => {
    const browser = await puppeteer.launch({
        headless: false
      })
      const page = await browser.newPage()
      await page.goto('https://www.facebook.com/login.php')

      const USER_SELECTOR = '#email'
      const PASSWORD_SELECTOR = '#pass'
      const BUTTON_LOGIN_SELECTOR = '#loginbutton'
    
      await page.click(USER_SELECTOR)
      await page.keyboard.type(DATA.username)

      await page.click(PASSWORD_SELECTOR)
      await page.keyboard.type(DATA.password)

      await page.click(BUTTON_LOGIN_SELECTOR)

      await page.waitForNavigation()

}
autoLogin()