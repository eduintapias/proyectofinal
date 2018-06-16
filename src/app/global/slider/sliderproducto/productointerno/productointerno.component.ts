import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../../../models/producto';

@Component({
  selector: 'app-productointerno',
  templateUrl: './productointerno.component.html',
  styleUrls: ['./productointerno.component.scss']
})
export class  ProductointernoComponent implements OnInit {
  @Input() producto : Producto;
  @Output() anexar : EventEmitter <Producto>() {
    constructor(parameters) {
      
    }
  }
   AgregarItem(){
     console.log(`Agregado ${this.producto.id}:${this.producto.nombre}` )
   }
  constructor() { }


  ngOnInit() {
  }

}
