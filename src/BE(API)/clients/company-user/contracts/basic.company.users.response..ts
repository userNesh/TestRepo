import { UserResponse } from './company.user.response'

export class BasicUserResponse{
    results: UserResponse
    totalNumber: number

    constructor(
        results: UserResponse,
        totalNumber: number
    ){
        this.results = results
        this.totalNumber = totalNumber
    }
}