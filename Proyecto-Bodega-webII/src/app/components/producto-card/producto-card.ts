import { Component } from '@angular/core';
import { Producto } from '../../models/producto2-card/producto2-card';
import { Output, EventEmitter ,Input} from '@angular/core';

@Component({
  selector: 'app-producto-card',
  imports: [],
  standalone:true,
  templateUrl: './producto-card.html',
  styleUrl: './producto-card.css',
})
export class ProductoCard {
 
   @Input() producto!: Producto;

  @Output() favorito = new EventEmitter<Producto>();

  seleccionar(){
    this.favorito.emit(this.producto);
  }
}

