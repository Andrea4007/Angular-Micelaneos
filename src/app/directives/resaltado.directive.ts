/* TENEMOS QUE CARGAR EL ELEMENTO ELEMENTREF PARA TRABAJAR CON REFERENCIA DE HTM SE REQUIERE DEL ELEMENTO O MODULO */
import { Directive, ElementRef, HostListener, Input} from '@angular/core';
/* hostlistener para que escuche el mouse */
@Directive({
  /* el selector va declarado como un atributo en los elementos de html */
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
/* todo elemento que tenga esta directiva cambiara su color */
  constructor(private el:ElementRef) {
    console.log("Directiva llamada");
    /* el tiene todo el contenido del parrafo */
    /* el.nativeElement.style.backgroundColor="yellow"; */
   }
   /* Input para decirle que el color que se le va a asignar viene de afuera */
   @Input("appResaltado") nuevoColor:string;
   @HostListener('mouseenter') mouseEntro(){
     console.log(this.nuevoColor);
  /*    this.el.nativeElement.style.backgroundColor="yellow"; */
  this.resaltar(this.nuevoColor|| 'yellow');
   }
   @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null);
    /*  this.el.nativeElement.style.backgroundColor=null; */
   }
   /* creando propiedad privada poner el color que yo estoy mandando por el html */
   private resaltar(color:string){
   this.el.nativeElement.style.backgroundColor=color;
   }
}
