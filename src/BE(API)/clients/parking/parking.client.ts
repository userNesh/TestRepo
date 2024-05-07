import { APIRequestContext, request } from "playwright/test";
import { APIResponse } from "playwright/test";
import { ParkingSpotRequest } from "./contracts/parking.spot.request"; 

const MOCK_URL = 'https://trycompany.wiremockapi.cloud'

export class ParkingClient {
    accessToken: string 
    constructor(accessToken: string){
        this.accessToken = accessToken
    }

    public async addParkingSpot(
        data: ParkingSpotRequest
    ): Promise<APIResponse> {
        const apiContext: APIRequestContext = await request.newContext()
        console.log("Headers:", {
            ['accessToken']: `Bearer ${this.accessToken}`
        });
        return await apiContext.post(
            `${MOCK_URL}/api/users/parking`,
            {
                headers: {
                    authorization: `Bearer ${this.accessToken}`
                },
                data
            }
        )
    }

}