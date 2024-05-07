export class ParkingSpotResponse {
    
    name: string
    lastName: string
    parkingSlot: string 

    constructor(
        name: string,
        lastName: string,
        parkingSlot: string 
    ){
        this.name = name
        this.lastName = lastName
        this.parkingSlot = parkingSlot
    }
}