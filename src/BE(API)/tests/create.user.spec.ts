import { expect } from "playwright/test";
import  { PhoneRequest } from "../clients/company-user/contracts/phone.requesut";
import { UserRequest } from "../clients/company-user/contracts/company.user.request";
import { test } from "../fixtures/carry.variables.fixture";
import { CompanyUserClient } from "../clients/company-user/company.user.client";
import { UserResponse } from "../clients/company-user/contracts/company.user.response";

test('should create user', async ({
    accessToken
}) => {

    const userClient = new CompanyUserClient(accessToken)

    const userPhoneNumberRequest = new PhoneRequest(
        '+381',
        '645557755'
    )

    const userRequest = new UserRequest(
        'Nebojsa',
        'Evic',
        [userPhoneNumberRequest],
        'kewa84@gmail.com'
    )
    const response = await userClient.createCompanyUser(
        userRequest
    )
    const readResponse: UserResponse = await response.json()
    expect.soft(readResponse.name).toEqual('Nebojsa')
    expect.soft(readResponse.id).not.toEqual('')
})