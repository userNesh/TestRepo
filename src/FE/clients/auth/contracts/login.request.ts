export class LoginRequest{
    grantType: string
    email: string
    password: string
   
    constructor(
        grantType: string,
        email: string,
        password: string
    ){
        this.grantType =grantType,
        this.email = email,
        this.password = password
    }
}