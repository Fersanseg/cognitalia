export interface IAuthToken {
    "state":string,
    "token":string,
    "type":string,
    "username":string,
    "email":string,
    "expires":number,
    "additionalInfo"?:string
}
