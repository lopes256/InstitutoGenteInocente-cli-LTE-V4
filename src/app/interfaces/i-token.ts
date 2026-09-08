export interface IToken {

    exp: number;
    expirationTime: number;
    iat: number;
    iss: string;
    sub: string;
    useremail: string;
    userName: string;
    userImage: string;
    memberSince: Date;
    proximoLogon: boolean;

}
