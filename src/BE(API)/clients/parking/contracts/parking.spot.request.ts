export class ParkingSpotRequest {
    
    userId: number
    hasDriverLicense: boolean 

    constructor(
        userId: number,
        hasDriverLicense: boolean
    ){
        this.userId = userId
        this.hasDriverLicense = hasDriverLicense
    }
}