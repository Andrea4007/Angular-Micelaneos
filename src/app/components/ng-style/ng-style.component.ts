import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
  <!-- se puede poner el estilo de la siguiente manera -->
  <!--   <p style="font-size: 15px"> -->
    <!-- por medio de esto se pueden agregar varios atributos como color etc -->
   <!--  <p [ngStyle]="{ 'font-size': tamano + 'px', 'color':'red' }">
      Hola mundo... esta es una etiqueta
    </p> -->
    <!-- no se pueden poner - cuando se usan objetos por lo tanto para diferenciar se usa una letra mayucula -->
    <!-- tambien se puede hacer de la siguiente manera -->
    <!-- <p [style.fontSize.px]="tamano">
      Hola mundo... esta es una etiqueta
    </p> -->
    <p [style.fontSize.px]="tamano">
      Hola mundo... esta es una etiqueta
    </p>
    <button class="btn btn-primary" (click)="tamano=tamano + 5">
      <i class="fa fa-plus"></i>
    </button>
    
    <button class="btn btn-primary" (click)="tamano=tamano - 5">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {
  tamano: number = 10;

  constructor() { }

  ngOnInit() {
  }

}
