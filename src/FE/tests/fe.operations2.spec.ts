import { expect, test} from '@playwright/test'

test('Operate on FE', async function({page}) {

    await page.goto('https://usernesh.github.io/SimpleWeb/');

    await page.waitForTimeout(500)
    await page.locator('[data-test-id="IzvođenjeTonskeProbe"]').click()

    await page.waitForTimeout(500)
    await page.locator('[data-test-id="Mikseta"]').click()

    await page.waitForTimeout(1000)
    await page.locator('[data-test-id="Nazad"]').click()

    await page.close()
})