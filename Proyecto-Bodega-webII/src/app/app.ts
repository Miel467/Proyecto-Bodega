import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{Navbar}from './components/navbar/navbar' 
import {ProductoCard} from './components/producto-card/producto-card'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, ProductoCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Proyecto-Bodega-webII');
}
