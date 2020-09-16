import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/http/user.service';
import { ApiError } from 'src/app/shared/models/api-error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  fgLogin: FormGroup;

  constructor(private userService: UserService) {
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
    }, error => {
      console.log(error as ApiError);
    });
    return false;
  }
}
