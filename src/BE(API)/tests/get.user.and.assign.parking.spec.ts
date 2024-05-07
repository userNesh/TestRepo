import { expect } from "playwright/test";
import { test } from "../fixtures/carry.variables.fixture";
import { CompanyUserClient } from "../clients/company-user/company.user.client";
import { UserResponse } from "../clients/company-user/contracts/company.user.response";
import { BasicUserResponse } from "../clients/company-user/contracts/basic.company.users.response.";
import { ParkingClient } from "../clients/parking/parking.client";
import { ParkingSpotRequest } from "../clients/parking/contracts/parking.spot.request";
import { ParkingSpotResponse } from "../clients/parking/contracts/parking.spot.response";

test('should fetch users and get id of user named Petar', async ({
    accessToken, user
}) => {

    const userClient = new CompanyUserClient(accessToken)

    const response = await userClient.fetchCompanyUsers()
    const readResponse: BasicUserResponse = await response.json()
    expect.soft(readResponse.totalNumber).toEqual(2)
    expect.soft(readResponse.results[1].name).toEqual('Petar')


    const entitiesList = await response.json()
    for (const founduser of entitiesList.results){
        if (founduser.name === 'Petar'){
            user.id = founduser.id
        }
    }
    expect.soft(user.id).not.toEqual('')

})
test('should assign Parking Slot to userId', async ({
    accessToken, user
}) => {

    const parkingClient = new ParkingClient(accessToken)

    const parkingSpotRequest = new ParkingSpotRequest(
        user.id,
        true
    )
    const response = await parkingClient.addParkingSpot(parkingSpotRequest)
    const readResponse: ParkingSpotResponse = await response.json()
    expect.soft(readResponse.parkingSlot).not.toEqual('')

})