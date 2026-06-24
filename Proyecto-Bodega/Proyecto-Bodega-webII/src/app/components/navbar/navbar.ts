import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  imageSrc='assets/images/img 2.png';

 // showSearch = false;
  ///searchText = '';

  //get productosFiltrados(): any[] {
   // if (!this.searchText.trim()) {
     // return this.productos;
   // }
  //  return this.productos.filter(producto => producto.nombre.toLowerCase().includes(this.searchText.toLowerCase()));
 // }

}

