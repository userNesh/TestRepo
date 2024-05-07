export class PhoneRequest {
    countrycode: string
    number: string

    constructor(
        countrycode: string,
        number: string 
    ){
        this.countrycode = countrycode
        this.number = number
    }
}