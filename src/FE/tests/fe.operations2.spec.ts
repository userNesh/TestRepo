import { expect, test, Page} from '@playwright/test'
class BasePage {
    constructor (protected page:Page) {}
}

class Pages extends BasePage{
    async page1(){
        await this.page.goto('https://usernesh.github.io/SimpleWeb/')
    }

    async page2(){
        await this.page.goto('https://usernesh.github.io/SimpleWeb/')
    }
}


test('Operate on FE', async function({page}) {
    const page1 = new Pages(page)
    await page1.waitForTimeout(500)
    await page1.locator('[data-test-id="IzvođenjeTonskeProbe"]').click()

    await page.waitForTimeout(500)
    await page.locator('[data-test-id="Mikseta"]').click()

    await page.waitForTimeout(1000)
    await page.locator('[data-test-id="Nazad"]').click()

    await page.close()
})