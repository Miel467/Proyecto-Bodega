import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto2-card/producto2-card';
import { ProductoCard } from '../../components/producto-card/producto-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  imports: [ProductoCard,CommonModule,FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {


  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Malbec Reserva',
      precio: 25000,
      descripcion: 'Vino tinto premium.',
      imagen: 'vino1.jpg'
    },
    {
      id: 2,
      nombre: 'Cabernet Sauvignon',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    }
  ];

  onFavorito(producto: Producto){
    alert('Seleccionaste: ' + producto.nombre);
  }
}



