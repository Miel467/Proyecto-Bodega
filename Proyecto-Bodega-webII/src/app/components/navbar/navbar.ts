import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
 
  mostrarBuscador = false;

  toggleBuscador(): void {
    this.mostrarBuscador = !this.mostrarBuscador;
  }
}

