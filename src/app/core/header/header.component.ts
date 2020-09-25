import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {Router} from "@angular/router";
import { AuthService } from '../http/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {

  @Input() sidenav: MatSidenav;

  constructor(private router: Router,
              public authService: AuthService) { }

  ngOnInit() {
    console.log(this.sidenav);
  }

  public toggleSidenav() {
    this.sidenav.toggle();
  }

}
