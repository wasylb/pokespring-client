import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiError } from 'src/app/shared/models/api-error';
import { User } from 'src/app/shared/models/user';
import { UserToken } from 'src/app/shared/models/user-token';
import {environment} from '../../../environments/environment';
import { StatusData } from 'src/app/shared/models/status-data';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  registerUrl = `${environment.apiUrl}/users/register`;
  getUserUrl = `${environment.apiUrl}/users/user`;

  constructor(private httpClient: HttpClient) { }

  public register(login: string, password: string, email: string, visibleName: string) {
    return this.httpClient.post<StatusData>(this.registerUrl, {
      login,
      password,
      email,
      visibleName
    });
  }

  public getUser(id: string, token: string) {
    return this.httpClient.get<User>(`${this.getUserUrl}/${id}`, {headers: {
      Authorization: `Bearer ${token}`
    }});
  }
}
