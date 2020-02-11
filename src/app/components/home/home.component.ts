import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-clases></app-clases>
  <app-css></app-css>
  <app-ng-style></app-ng-style>
  <app-ng-switch></app-ng-switch>
    <p [appResaltado]="'red'">
     Rutas y rutas hijas
    </p>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
