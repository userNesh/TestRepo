import { expect, test} from '@playwright/test'

test('Operate on FE', async function({page}) {

    await page.goto('http://localhost/WebApplication12/Pocetak.aspx')

    await page.waitForTimeout(500)
    await page.locator('[data-test-id="username"]').fill('Nebojsa@ftn.com')

    await page.waitForTimeout(500)
    await page.locator('[data-test-id="password"]').fill('1')

    await page.waitForTimeout(1000)
    await page.locator('[data-test-id="btnLogIn"]').click()

    await page.waitForTimeout(1000)
    await page.locator('[data-test-id="btnAddBook"]').click()

    await page.waitForTimeout(1000)
    await page.locator('[data-test-id="ISBN"]').fill('99921-58-10-7')

    await page.locator('[data-test-id="bookTitle"]').click()
    await page.waitForTimeout(2000)
    await page.locator('[data-test-id="bookTitle"]').fill('21000 milja ispod mora')
    await expect(page.locator('[data-test-id="bookTitle"]')).toHaveValue('21000 milja ispod mora');


    await page.waitForTimeout(1000)
    await page.locator('[data-test-id="bookAuthor"]').fill('Jill Wern')

    await page.waitForTimeout(1000)
    await page.locator('[data-test-id="bookGenre"]').fill('Avantura')

    // await page.waitForTimeout(1000)
    // await page.locator('[data-test-id="btnSave"]').click()
    // await page.locator('[data-test-id="btnSave"]').click()
    // await page.waitForTimeout(20000)

})