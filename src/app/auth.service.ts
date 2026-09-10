import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';
import { ILogin } from './interfaces/i-login';
import { IAccessToken } from './interfaces/i-access-token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenURL: string = environment.apiURLBase + environment.tokenURL
  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  isAuthenticated(): boolean {
    const tokenString = localStorage.getItem('access_token');
    if (tokenString) {
      const expirated = this.jwtHelper.isTokenExpired(tokenString);
      return !expirated;
    } else {
      return false;
    }
  }

  doLogOut() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['/login']);
  }

  doLoginUser(emailUsuarioRequest: string, passwordRequest: string): Observable<IAccessToken> {
    const loginRequest: ILogin = {
      emailUsuario: emailUsuarioRequest,
      password: passwordRequest
    };
    return this.http.post<IAccessToken>(this.tokenURL, loginRequest);
  }

}
