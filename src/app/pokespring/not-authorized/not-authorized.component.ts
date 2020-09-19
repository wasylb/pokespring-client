import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styleUrls: ['./not-authorized.component.less']
})
export class NotAuthorizedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
