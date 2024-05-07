import { APIRequestContext, request } from "playwright/test";
import { APIResponse } from "playwright/test";
import { UserRequest } from "./contracts/company.user.request";

const MOCK_URL = 'https://trycompany.wiremockapi.cloud'

export class CompanyUserClient {
    accessToken: string 
    constructor(accessToken: string){
        this.accessToken = accessToken
    }

    public async fetchCompanyUsers(): Promise<APIResponse> {
        const apiContext: APIRequestContext = await request.newContext()
        // console.log("Headers:", {
        //     ['accessToken']: `Bearer ${this.accessToken}`
        // });
        return await apiContext.get(
            `${MOCK_URL}/api/users`,
            {
                headers: {
                    authorization: `Bearer ${this.accessToken}`
                }
            }
        )
    }

    public async createCompanyUser(
        data: UserRequest
    ): Promise<APIResponse> {
        const apiContext: APIRequestContext = await request.newContext()
        return await apiContext.post(
            `${MOCK_URL}/api/users`,
            {
                headers: {
                    authorization: `Bearer ${this.accessToken}`
                },
                data
            }
        )
    }

    public async fetchCompanyUserPerId(
        userId: string
    ): Promise<APIResponse> {
        const apiContext: APIRequestContext = await request.newContext()
        return await apiContext.get(
            `${MOCK_URL}/api/users/${userId}`,
            {
                headers: {
                    authorization: `Bearer ${this.accessToken}`
                }
            }
        )
    }

}