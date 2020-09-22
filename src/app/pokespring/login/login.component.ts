import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/http/user.service';
import { ApiError } from 'src/app/shared/models/api-error';
import { AuthService } from 'src/app/core/http/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  fgLogin: FormGroup;

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router) {
    this.fgLogin = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
   }

  ngOnInit(): void {
  }

  public login(): boolean {

    this.userService.login(this.fgLogin.get('login').value, this.fgLogin.get('password').value).subscribe(user => {
      console.log(user);
      this.authService.activeUser = user.user;
      localStorage.setItem('userId', this.authService.activeUser.id);
      localStorage.setItem('userToken', this.authService.activeUser.token);
      console.log(this.authService.activeUser);
      this.router.navigateByUrl('/home');
    }, error => {
      console.log(error as ApiError);
    });
    return false;
  }
}
