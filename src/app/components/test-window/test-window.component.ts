import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-window',
  templateUrl: './test-window.component.html',
  styleUrls: ['./test-window.component.scss']
})
export class TestWindowComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }

  hasRoute(route: string) {
    return route === this.routes.url;
  }

}
