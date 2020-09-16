import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiError } from 'src/app/shared/models/api-error';
import { User } from 'src/app/shared/models/user';
import { UserToken } from 'src/app/shared/models/user-token';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = '/users';
  loginAPIURL = '/login';
  constructor(private httpClient: HttpClient) { }

  public login(login: string, password: string): Observable<any> {
    return this.httpClient.post<UserToken>(environment.apiUrl + this.userUrl + this.loginAPIURL, {
      login,
      password
    });
  }
}
