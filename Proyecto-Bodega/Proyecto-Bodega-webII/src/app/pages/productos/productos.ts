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
    },
    {
      id: 3,
      nombre: 'Cabernet Sauvignon',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 4,
      nombre: 'Cabernet Sauvignon',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 5,
      nombre: 'Cabernet Sauvignon',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 6,
      nombre: 'Cabernet Sauvignon',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 7,
      nombre: 'Cabernet Sauvignon',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 8,
      nombre: 'Cabernet Sauvignon',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 9,
      nombre: 'Cabernet Sauvignon',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 10,
      nombre: 'Cabernet Sauvignon',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 11,
      nombre: 'Cabernet Sauvignon',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 12,
      nombre: 'Cabernet Sauvignon',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 13,
      nombre: 'Cabernet Sauvignon',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 14,
      nombre: 'Cabernet Sauvignon',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 16,
      nombre: 'Cabernet Sauvignon',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 17,
      nombre: 'Cabernet Sauvignon',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 18,
      nombre: 'Cabernet Sauvignon',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 19,
      nombre: 'Cabernet Sauvignon',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },

  ];

  onFavorito(producto: Producto){
    alert('Seleccionaste: ' + producto.nombre);
  }
}



