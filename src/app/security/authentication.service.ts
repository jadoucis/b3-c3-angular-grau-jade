import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpHeaders} from "@angular/common/http";

interface AuthenticationResponse {
  status: boolean;
  token: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  redirectUrl = '/';

  constructor() { }

  static isLoggedIn() {
    const token = AuthenticationService.getToken();
    console.log('token' + token)
    return !!token && !AuthenticationService.isTokenExpired(token);
  }

  static isTokenExpired(token: string) {
    // try {
    // const decoded = jwt_decode(token);
    // return decoded.exp < Date.now() / 1000;
    // } catch (err) {
      // return false;
    }

    // test
    return false;
  }

  static setToken(idToken: string) {
    sessionStorage.setItem('id_token');
  }

  static getToken() {
    return sessionStorage.getItem('id_token');
  }

  static logout() {
    sessionStorage.removeItem('id_token');
  }

  loginWithRole(username, password, role): Observable<AuthenticationResponse> {
    /* const url = '${this.authenticationUrl}/login';
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json'
        })
    };

    return this.httpClient.request<AuthenticationResponse>('POST', url, {
      body: {
        username,
        password,
        role
      },
      headers: httpOptions.headers
    }).pipe(
      tap((data: AuthenticationResponse)
      => AuthenticationService.setToken(data.token))
    );
    */

    // test
    const response: AuthenticatorResponse
        = {status: true, message: 'HTTP 200', token: 'atoken'};
    AuthenticationService.setToken('token');
    return of(response);
  }

}
