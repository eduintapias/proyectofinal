import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-sliderproducto',
  templateUrl: './sliderproducto.component.html',
  styleUrls: ['./sliderproducto.component.scss']
})
export class SliderproductoComponent implements OnInit {
  @Output() anexar :new EventEmitter <Producto>();
  productos: Producto[];
  constructor() {
    this.productos = new Array<Producto>();

    for (let i = 0; i < 5; i++) {
      let p = new Producto();
      p.id = i;
      p.nombre = `nombre ${i}`;
      p.descripcion = `descripcion ${i}`;
      p.imagen = `https://loremflickr.com/320/240/dance/all`;
  
      this.productos.push(p);
    }
  }
  ngOnInit() {
  }
  onAdicionar(producto: Producto){}

}
