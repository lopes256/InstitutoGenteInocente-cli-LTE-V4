import { Injectable } from '@angular/core';
import { IToken } from '../interfaces/i-token';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenUtilsService {

  tokenDecode: IToken = <IToken>{};

  constructor() { }

  getDecodedAccessToken(): IToken {
    try {
      let storageToken = localStorage.getItem('access_token');
      let token = storageToken ? storageToken : '';

      this.tokenDecode = jwtDecode(token);
      this.tokenDecode.userImage = this.tokenDecode.userImage ? this.tokenDecode.userImage : '../assets/dist/img/boxed-bg.jpg';

      return this.tokenDecode;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

}
