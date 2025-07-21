import {test as baseTest } from '@playwright/test'
import { LoginClient } from '../../BE(API)/clients/auth/login.client'
import { expect, test} from '@playwright/test'

let accessToken: string
const loginClient = new LoginClient()

// export type variables = {
//     clientCredentialsObject :JSON
//     accessToken: string
//     user: User
// }

test('Operate on FE', async function({page}) {

    await page.goto('https://usernesh.github.io/SimpleWeb/');


    (await page.locator('[data-test-id="IzvođenjeTonskeProbe"]'))[1].click()

    await page.locator('[data-test-id="Mikseta"]').click()

    await page.close()
})

test('Operate on FE1', async function({page}) {

    await page.goto('https://github.com/userNesh/SimpleWeb');

    // await page.waitForTimeout(500)
    // await page.locator('[data-test-id="Foto-Video Galerija"]').click()

    // await page.waitForTimeout(500)
    // await page.locator('[data-test-id="Foto-Galerija"]').click()

    // await page.waitForTimeout(1000)
    // await page.locator('[data-test-id="Zatvori Foto"]').click()

    // await page.waitForTimeout(1000)
    // await page.locator('[data-test-id="O Nama"]').click()

    // await page.waitForTimeout(2000)
    // await page.locator('[data-test-id="Pocetna"]').click()

    // await page.close()
})