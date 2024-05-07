import { APIRequestContext, request } from "playwright/test";
import { APIResponse } from "playwright/test";
import { LoginRequest } from "./contracts/login.request"; 

const MOCK_URL = 'https://trycompany.wiremockapi.cloud'


export class LoginClient {
    privateCredentials: JSON | undefined

    // Here we do not do standard client method, and then call method from test but we do all the work in client to make it easier  to call from fixture and use
    public async getCredentials(){

        const  loginPayload:LoginRequest = {
            grantType: 'password_credentials',
            email:process.env.LOGIN_EMAIL!,
            password:process.env.LOGIN_PASSWORD!
        }
        const apiContext: APIRequestContext = await request.newContext()
        const loginResponse  = await apiContext.post(
            `${MOCK_URL}/api/login`,
            {
                data:loginPayload
            }
        )
        const loginResponseJson = await loginResponse.json()
        // const identityToken = loginResponseJson.token
        return loginResponseJson
    }

    public async loggedOut(){

        const apiContext: APIRequestContext = await request.newContext()
        const logoutResponse  = await apiContext.get(
            `${MOCK_URL}/api/logout`
        )
        const loginResponseJson = await logoutResponse.json()
        // const identityToken = loginResponseJson.token
        return loginResponseJson
    }

    

    // public async fetchCompanyUserPerId(
    //     userId: string
    // ): Promise<APIResponse> {
    //     const apiContext: APIRequestContext = await request.newContext()
    //     return await apiContext.get(
    //         `${MOCK_URL}/api/users/${userId}`,
    //         {
    //             headers: {
    //                 athorization: 'Bearer $(this.accessToken)'
    //             }
    //         }
    //     )
    // }

}