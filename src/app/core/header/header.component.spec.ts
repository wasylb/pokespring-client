import { HttpClient, HttpHandler } from '@angular/common/http';
import { Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from 'src/app/app.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {

  let component: HeaderComponent;
  let appComponent: AppComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let appFixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent],
      imports: [
        MatIconModule,
        MatToolbarModule,
        RouterTestingModule
      ],
      providers: [
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sidenav should be toggleable', () => {
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.whenRenderingDone().then(data => {
      expect(component.toggleSidenav()).toBeTruthy();
    });
  });
});
