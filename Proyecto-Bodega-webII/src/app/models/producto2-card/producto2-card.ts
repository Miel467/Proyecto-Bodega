import { Component } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  categoria:string;
  descripcion: string;
  precio: number;
  imagen: string;


  origen: string;
  uva: string;
  alcohol: string;
  temperatura: string;
  maridaje: string;
  notas: string;
}

@Component({
  selector: 'app-producto2-card',
  imports: [],
  templateUrl: './producto2-card.html',
  styleUrl: './producto2-card.css',
})
export class Producto2Card {

}
