import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Producto } from "../../models/producto2-card/producto2-card";
import { ProductoCard } from "../../components/producto-card/producto-card";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-productos",
  standalone: true,
  imports: [ProductoCard, CommonModule, FormsModule],
  templateUrl: "./productos.html",
  styleUrls: ["./productos.css"],
})
export class Productos { 

 @Input() categoria: string = 'Todos';


get productosFiltrados(): Producto[] {
  if (this.categoria === 'Todos') {
    return this.productos;
  }

  return this.productos.filter(
    producto => producto.categoria === this.categoria
  );
}

  productos: Producto[] = [
    {
      id: 1,
      nombre: "Malbec",
      precio: 16000,
      categoria: "Tinto",
      descripcion: "Intenso y elegante",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_668832-MLA81281833720_122024-O.webp",


      origen: " g",
      uva: "s",
      alcohol: "d",
      temperatura: "d",
      maridaje:" d ",
      notas: "d",
    },
    {
      id: 3,
      nombre: "Chardonnay",
      precio: 16500,
      categoria: "Blanco",
      descripcion: "Fresco,Elegante y con gran versatilidad",
      imagen: "https://assets.iprofesional.com/assets/jpg/2025/11/607397.jpg",


     origen: "s",
      uva: "x",
      alcohol: "x",
      temperatura: "x",
      maridaje:" x ",
      notas: "x",
    },
    {
      id: 4,
      nombre: "Merlot",
      precio: 17000,
      categoria: "Tinto",
      descripcion: "versátil, suave y afrutado, con taninos medios",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_891001-MLA104899517934_012026-O.webp",


      origen: "x",
      uva: "x",
      alcohol: "x",
      temperatura: "x",
      maridaje:" x ",
      notas: "x",
    },
    {
      id: 5,
      nombre: "Syrah",
      precio: 19000,
      categoria: "Tinto",
      descripcion: "Frutos negros.",
      imagen:
        "https://marianagiljuncal.com/wp-content/uploads/2022/02/FGI1275rec_SYRAH.jpg",


      origen: "x",
      uva: "x",
      alcohol: "x",
      temperatura: "x",
      maridaje: " x ",
      notas: " x ",
    },
    {
      id: 6,
      nombre: "Rosado de Malbec",
      precio: 14000,
      categoria: "Rosado",
      descripcion: "Ligero y elegante.",
      imagen:
        "https://fincamt.com/wp-content/uploads/2024/06/Rosado-3-2024.jpg",


     origen: "x",
      uva: "x",
      alcohol: "x",
      temperatura: "x",
      maridaje:" x ",
      notas: "x",
    },
    {
      id: 7,
      nombre: "Sauvignon Blanc",
      precio: 17000,
      categoria: "Blanco",
      descripcion: "Fresco y cítrico.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVL7-2ELjvOX545KI1NNrp5ehFviKhW2ngg&s",


      origen: "x",
      uva: "x",
      alcohol: "x",
      temperatura: "x",
      maridaje:" x ",
      notas: "x",
    },
    {
      id: 9,
      nombre: "Rosado de Pinot Noir",
      precio: 16000,
      categoria: "Rosado",
      descripcion: "Fresco y delicado.",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_671031-MLA111189606179_052026-O.webp",


origen: "x",
      uva: "x",
      alcohol: "x",
      temperatura: "x",
      maridaje:" x ",
      notas: "x",
    },
    {
      id: 10,
      nombre: "Santa Julia",
      precio: 18000,
      categoria: "Blanco",
      descripcion: "Intenso y equilibrado.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJ9hASgv5dnc_ZQFXqaMoQmmuYS2tLmX5hw&s",


      origen: "x",
      uva: "x",
      alcohol: "x",
      temperatura: "x",
      maridaje: " x ",
      notas: " x ",
    },
    {
      id: 11,
      nombre: "Champagne",
      precio: 28000,
      categoria: "Espumante",
      descripcion: "Elegante y espumoso.",
      imagen:
        "https://www.twomoreglasses.com/cdn/shop/files/CoteAtHome_Valentines24_20943-copy-square-1-scaled.jpg?v=1735191305",


     origen: "x",
      uva: "x",
      alcohol: "x",
      temperatura: "x",
      maridaje:" x ",
      notas: "x",
    },
    {
      id: 12,
      nombre: "Champagne Rosé Brut ",
      precio: 35000,
      categoria: "Espumante",
      descripcion: "Elegante y fresco.",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_642451-MLA109753804287_032026-O.webp",


     origen: "x",
      uva: "x",
      alcohol: "x",
      temperatura: "x",
      maridaje:"  ",
      notas: "",
    },
  ];


 
  

 
}
