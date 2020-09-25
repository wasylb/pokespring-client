import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/http/user.service';
import { ApiError } from 'src/app/shared/models/api-error';
import { AuthService } from 'src/app/core/http/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  fgLogin: FormGroup;

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router,
              private messageService: MessageService) {
    this.fgLogin = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
   }

  ngOnInit(): void {
  }

  public async login(): Promise<any> {

     await this.authService.login(this.fgLogin.get('login').value, this.fgLogin.get('password').value).toPromise().then(user => {
      console.log(user);
      this.authService.activeUser = user.data.user;
      localStorage.setItem('userId', this.authService.activeUser.id);
      localStorage.setItem('userToken', this.authService.activeUser.token);
      console.log(this.authService.activeUser);
      this.messageService.showMessage(user);
      this.router.navigateByUrl('/home');

    }, error => {
      this.messageService.showMessage(error.error);
    }).catch(error => {
      this.messageService.showMessage(error.error);
      console.log(error);
    });
  }
}
