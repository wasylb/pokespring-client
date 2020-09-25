import { Component, ElementRef, NgZone, ViewChild, Renderer2 } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from './core/http/auth.service';
import { UserService } from './core/http/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'pokespring-client';
  loading = false;

  @ViewChild('spinner')
  spinnerElement: ElementRef;

  constructor(private router: Router,
              private spinner: NgxSpinnerService,
              public authService: AuthService,
              public userService: UserService) {

    this.router.events.subscribe((event: RouterEvent) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.spinner.show();
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          setTimeout(() => { this.spinner.hide(); }, 1000);
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
