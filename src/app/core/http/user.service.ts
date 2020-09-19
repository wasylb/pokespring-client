import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiError } from 'src/app/shared/models/api-error';
import { User } from 'src/app/shared/models/user';
import { UserToken } from 'src/app/shared/models/user-token';
import {environment} from '../../../environments/environment';
import { StatusData } from 'src/app/shared/models/status-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = '/users';
  loginAPIURL = '/login';
  registerAPIURL = '/register';
  getUserAPIURL = '/users/user'

  constructor(private httpClient: HttpClient) { }

  public login(login: string, password: string): Observable<UserToken> {
    return this.httpClient.post<UserToken>(environment.apiUrl + this.userUrl + this.loginAPIURL, {
      login,
      password
    });
  }

  public register(login: string, password: string, email: string, visibleName: string) {
    return this.httpClient.post<StatusData>(environment.apiUrl + this.userUrl + this.registerAPIURL, {
      login,
      password,
      email,
      visibleName
    });
  }

  public getUser(id: string, token: string) {
    return this.httpClient.get<User>(`${environment.apiUrl}${this.getUserAPIURL}/${id}`, {headers: {
      'Authorization': `Bearer ${token}`
    }});
  }
}
