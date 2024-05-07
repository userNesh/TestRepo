import { PhoneRequest } from './phone.requesut'

export class UserRequest{
    name: string
    lastName: string
    phone: PhoneRequest[]
    mail: string

    constructor(
        name: string,
        lastName: string,
        phone: PhoneRequest[] = [],
        mail: string
    ){
        this.name = name
        this.lastName = lastName
        this.phone = phone
        this.mail = mail
    }
}