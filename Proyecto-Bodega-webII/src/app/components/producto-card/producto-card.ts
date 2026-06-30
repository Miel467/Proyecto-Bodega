import { Component } from '@angular/core';
import { Producto } from '../../models/producto2-card/producto2-card';
import { Input} from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-producto-card',
  imports: [  CommonModule,
  RouterModule
],
  standalone:true,
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css',
})
export class ProductoCard {

  @Input() producto!: Producto;
 



}

