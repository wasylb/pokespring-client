import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { HttpClient } from '@angular/common/http';
import { StatusData } from 'src/app/shared/models/status-data';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserService } from './user.service';
import { UserToken } from 'src/app/shared/models/user-token';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  activeUser: User;
  isLogged = false;
  validateTokenUrl = `${environment.apiUrl}/users/validateToken`;
  loginUrl = `${environment.apiUrl}/users/login`;
  logoutUrl = `${environment.apiUrl}/users/logout`;

  constructor(private router: Router,
              private httpClient: HttpClient,
              private userService: UserService) {
                console.log(this.activeUser);
               }

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   if (!this.activeUser) {
     const userId = localStorage.getItem('userId');
     const userToken = localStorage.getItem('userToken');
     if (userId && userToken) {
       this.activeUser = new User();
       this.activeUser.id = userId;
       this.activeUser.token = userToken;
     } else {
       this.router.navigateByUrl('/notauthorized');
       return false;
     }
   }
   return this.isTokenValid(this.activeUser).pipe(map((statusData: { status: string, message: string, data?: object}) => {

    if (statusData.status === 'Success') {
      this.userService.getUser(this.activeUser.id, this.activeUser.token).subscribe(data => {
        this.activeUser = data;
        this.isLogged = true;
        console.log(this.activeUser);
     });
      return true;
    }
    this.router.navigateByUrl('/notauthorized');
    return false;
}), catchError((error) => {
    this.router.navigateByUrl('/notauthorized');
    return of(false);
}));
}


  public isTokenValid(user: User): Observable<StatusData> {
    console.log(user);
    if (user) {
      const {id} = user;
      const token = user.token;
      return this.httpClient.post<StatusData>(this.validateTokenUrl, {
        id,
        token
      }, {headers: {
        Authorization: `Bearer ${token}`
      }});
  }
}

public login(login: string, password: string): Observable<StatusData> {
  return this.httpClient.post<StatusData>(this.loginUrl, {
    login,
    password
  });
}

public logout() {
    const {id, token} = this.activeUser;
    console.log(id);
    this.httpClient.post<StatusData>(this.logoutUrl, {id}, {headers: {
    Authorization: `Bearer ${token}`
}}).toPromise().then(status => {
  console.log(status);
  localStorage.removeItem('userId');
  localStorage.removeItem('userToken');
  this.activeUser = undefined;
  this.router.navigateByUrl('/login');
}, error => {
  console.log(error);
});
  }
}
