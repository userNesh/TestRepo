import { expect, test} from '@playwright/test'

test('Operate on FE', async function({page}) {

    await page.goto('http://localhost:8000/Music%20Harmony/Music%20Harmony.html');

    await page.waitForTimeout(500)
    await page.locator('[data-test-id="Foto-Video Galerija"]').click()

    await page.waitForTimeout(500)
    await page.locator('[data-test-id="Foto-Galerija"]').click()

    await page.waitForTimeout(1000)
    await page.locator('[data-test-id="Zatvori Foto"]').click()

    await page.waitForTimeout(1000)
    await page.locator('[data-test-id="O Nama"]').click()

    await page.waitForTimeout(2000)
    await page.locator('[data-test-id="Pocetna"]').click()

    await page.close()
})