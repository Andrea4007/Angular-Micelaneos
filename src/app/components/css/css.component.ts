import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  /* agregando archivo de configuracion de css */
  styles: [ `
     p{
       color:red;
       font-size: 20px;
     }
  ` ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
