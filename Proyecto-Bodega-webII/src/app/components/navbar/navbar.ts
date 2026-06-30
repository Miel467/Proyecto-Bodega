import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../carrito';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  imageSrc='assets/images/yess-removebg-preview.png';
  constructor(public carritoService: CarritoService) {}

}