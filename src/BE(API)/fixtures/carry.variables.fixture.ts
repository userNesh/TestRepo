import {test as baseTest } from '@playwright/test'
import { LoginClient } from '../clients/auth/login.client'
import { User } from './user'

let accessToken: string
let passedToken: string
const loginClient = new LoginClient()

export type variables = {
    clientCredentialsObject :JSON
    accessToken: string
    passedToken: string
    user: User
}

// Using fixture for passing values
// object oof class must be initialized, initializatipon must be outside of export const test
// so that objectcis only accessed (not initialized) while used as exported variable through fixture
// to be able to preserve values in fixture between tests

const user = new User()

export const test =  baseTest.extend<variables>({
    accessToken: async ({request}, use) => {
        const clientCredentialsObject = await loginClient.getCredentials()
        const array = JSON.parse(JSON.stringify(clientCredentialsObject))
        accessToken = array.token
        await use(accessToken)
    },
    passedToken: async ({request}, use) => {
        const clientCredentialsObject = await loginClient.loggedOut()
        const array = JSON.parse(JSON.stringify(clientCredentialsObject))
        passedToken = array.token
        await use(passedToken)
    },
    user: async ({request}, use) => {
        await use(user)
    }
})