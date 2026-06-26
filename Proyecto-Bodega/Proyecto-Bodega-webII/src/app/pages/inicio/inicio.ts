import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Productos } from '../productos/productos';
@Component({
  selector: 'app-inicio',
   standalone:true,
  imports: [RouterLink,Productos],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {}
