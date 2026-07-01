import { Component } from '@angular/core';
import { Productos } from '../productos/productos';
@Component({
  selector: 'app-inicio',
   standalone:true,
  imports: [Productos],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  
 categoriaSeleccionada = 'Todos';

filtrar(categoria: string) {
  this.categoriaSeleccionada = categoria;
}


imagenes = [
   'https://resources.itemint.com/hs-fs/hubfs/bodega-toneles-almacenamiento-vino-spain-wine-concept.webp?width=1000&height=667&name=bodega-toneles-almacenamiento-vino-spain-wine-concept.webp',
    'https://www.clarin.com/2024/06/23/-Kr8vC50T_1200x0__1.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4o6C3vQrm4n1TaDqjxG-QeRUk57e0r45pfg&s'
  ];

  indice = 0;

  siguiente() {
    this.indice = (this.indice + 1) % this.imagenes.length;
  }

  anterior() {
    this.indice =
      (this.indice - 1 + this.imagenes.length) % this.imagenes.length;
  }

  ngOnInit() {
    setInterval(() => {
      this.siguiente();
    }, 5000);
  }


}
