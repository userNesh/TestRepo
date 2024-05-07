export class UserResponse{
    name: string
    lastName: string
    mail: string
    id: string

    constructor(
        name: string,
        lastName: string,
        mail: string,
        id: string
    ){
        this.name = name
        this.lastName = lastName
        this.mail = mail
        this.id = id
    }
}