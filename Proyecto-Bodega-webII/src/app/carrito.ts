import { Injectable } from '@angular/core';
import { Producto } from './models/producto2-card/producto2-card';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito: Producto[] = [];

 agregar(producto: Producto):void {

  this.carrito.push(producto);

  console.log(this.carrito);

}

  obtener() {
    return this.carrito;
  }

  cantidad() {
    return this.carrito.length;
  }

 
 
}
