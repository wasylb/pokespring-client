import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/core/http/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  fgRegister: FormGroup;

  constructor(private userService: UserService) {
    this.fgRegister = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      password: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      visibleName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)])
    });
  }

  ngOnInit(): void {
  }

  public register(): boolean {
    this.userService.register(this.fgRegister.get('login').value,
                              this.fgRegister.get('password').value,
                              this.fgRegister.get('email').value,
                              this.fgRegister.get('visibleName').value
    ).subscribe(statusData => {
      console.log(statusData);
    }, error => {
      console.log(error);
    });
    return true;
  }

}
