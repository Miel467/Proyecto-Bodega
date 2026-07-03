import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import {Producto} from '../../models/producto2-card/producto2-card';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';


@Component({
  standalone: true,
  selector: "app-verdetalle-vino",
  imports: [CommonModule,RouterLink],
  templateUrl: "./verdetalle-vino.html",
  styleUrl: "./verdetalle-vino.css",
})
export class VerdetalleVino {
 

     productos: Producto[] = [
    {
      id: 1,
      nombre: "Malbec",
      precio: 16000,
      categoria: "Tinto",
      descripcion: "Intenso y elegante",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_668832-MLA81281833720_122024-O.webp",


      origen: "Quercy, Francia",
      uva: "Negro,Vitis vinifera",
      alcohol: "15%",
      temperatura: "16°C y 18°C",
      maridaje:" Por su estructura y acidez equilibrada, es el compañero perfecto para carnes rojas asadas, pastas con salsas intensas y quesos maduros. ",
      notas: "Varían según su crianza, ofreciendo desde aromas a frutos rojos frescos hasta toques complejos de madera y especias",
    },
    {
      id: 3,
      nombre: "Chardonnay",
      precio: 16500,
      categoria: "Blanco",
      descripcion: "Fresco,Elegante y con gran versatilidad",
      imagen: "https://assets.iprofesional.com/assets/jpg/2025/11/607397.jpg",


      origen: "Borgoña, Francia",
      uva: "Piel verde",
      alcohol: "15%",
      temperatura: "10°C y 13°C",
      maridaje: "Sin paso por madera: Pescados blancos, mariscos, ceviches, sushi y ensaladas.Con paso por madera : Pescados grasos (salmón), pollo, pastas con salsas blancas, langosta y quesos maduros.",
      notas: "Es extremadamente versátil.Sus notas aromáticas cambian drásticamente dependiendo de la región, el clima y su crianza en barrica, ofreciendo sabores que van de frutales cítricos hasta notas untuosas de frutos secos.",
    },
    {
      id: 4,
      nombre: "Merlot",
      precio: 17000,
      categoria: "Tinto",
      descripcion: "versátil, suave y afrutado, con taninos medios",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_891001-MLA104899517934_012026-O.webp",


      origen: "Burdeos, Francia",
      uva: "azul oscuro,Vitis vinifera",
      alcohol: "13% a 15%",
      temperatura: "15°C y 18°C",
      maridaje: "Acompáñalo con carnes rojas magras (vacuno, cordero) a la parrilla, pastas con salsas de tomate, quesos semiblandos como el Camembert, o pescados grasos como el salmón",
      notas: "Se caracteriza por un marcado perfil frutal y su gran versatilidad para acompañar comidas",
    },
    {
      id: 5,
      nombre: "Syrah",
      precio: 19000,
      categoria: "Tinto",
      descripcion: "Frutos negros.",
      imagen:
        "https://marianagiljuncal.com/wp-content/uploads/2022/02/FGI1275rec_SYRAH.jpg",


      origen: "Rhone, Francia",
      uva: "rojo,Vitis vinifera",
      alcohol: "15%",
      temperatura: "16°C y 18°C",
      maridaje: "Su cuerpo y acidez lo hacen ideal para acompañar platos de carnes rojas, pastas con salsas intensas y quesos maduros.",
      notas: "Destaca por su color profundo, aromas a frutos negros y violetas, y su característico final especiado a pimienta negra.",
    },
    {
      id: 6,
      nombre: "Rosado de Malbec",
      precio: 14000,
      categoria: "Rosado",
      descripcion: "Fresco, vibrante y aromático",
      imagen:
        "https://fincamt.com/wp-content/uploads/2024/06/Rosado-3-2024.jpg",


      origen: "Mendoza, Argentina",
      uva: "rojo,Vitis vinifera",
      alcohol: "12%",
      temperatura: "8°C y 10°C",
      maridaje: "Su cuerpo y acidez lo hacen ideal para acompañar platos de pescado, aves de corral y ensaladas.",
      notas: "Baja extracción de color, equilibrada acidez y un perfil predominantemente frutal y floral que lo hace muy versátil y fácil de beber.",
    },
    {
      id: 7,
      nombre: "Sauvignon Blanc",
      precio: 17000,
      categoria: "Blanco",
      descripcion: "Seco, de cuerpo ligero y acidez vibrante",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVL7-2ELjvOX545KI1NNrp5ehFviKhW2ngg&s",


      origen: "Burgundy, Francia",
      uva: "blanco,Vitis vinifera",
      alcohol: "13%",
      temperatura: "12°C y 14°C",
      maridaje: "Su cuerpo y acidez lo hacen ideal para acompañar platos de pescado, aves de corral y ensaladas.",
      notas: "Su perfil aromático varía drásticamente según el clima y la madurez de la uva, oscilando entre notas herbales y vegetales frescas, hasta aromas frutales y tropicales intensos.",
    },
    {
      id: 9,
      nombre: "Rosado de Pinot Noir",
      precio: 16000,
      categoria: "Rosado",
      descripcion: "Elegancia, sutileza y frescura.",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_671031-MLA111189606179_052026-O.webp",


      origen: "Burgundy, Francia",
      uva: "rojo,Vitis vinifera",
      alcohol: "12%",
      temperatura: "8°C y 10°C",
      maridaje: "Su cuerpo y acidez lo hacen ideal para acompañar platos de pescado, aves de corral y ensaladas.",
      notas: "Se caracterizan por su color rosa pálido o salmón, su marcada expresión a frutos rojos y una acidez vibrante que los convierte en una opción sumamente versátil y refrescante.",
    },
    {
      id: 10,
      nombre: "Santa Julia",
      precio: 18000,
      categoria: "Blanco",
      descripcion: "Intenso y equilibrado.",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIJ9hASgv5dnc_ZQFXqaMoQmmuYS2tLmX5hw&s",


      origen: "Mendoza, Argentina",
      uva: "blanco,Vitis vinifera",
      alcohol: "13%",
      temperatura: "12°C y 14°C",
      maridaje: "Su cuerpo y acidez lo hacen ideal para acompañar platos de pescado, aves de corral y ensaladas.",
      notas: "Se destaca por su equilibrio entre su contenido de azúcar natural y una acidez vibrante que evita que sea empalagoso.",
    },
    {
      id: 11,
      nombre: "Champagne",
      precio: 28000,
      categoria: "Espumante",
      descripcion: "Elegante y espumoso.",
      imagen:
        "https://www.twomoreglasses.com/cdn/shop/files/CoteAtHome_Valentines24_20943-copy-square-1-scaled.jpg?v=1735191305",


      origen: "Champagne, Francia",
      uva: "blanco,Vitis vinifera",
      alcohol: "12%",
      temperatura: "6°C y 8°C",
      maridaje: "Depende de su tipo. Las burbujas y la acidez limpian el paladar, por lo que los Brut van perfecto con pescados o mariscos, los Rosé con pato o salmón, los Blanc de Blancs con sushi, y los dulces Demi-Sec con postres frutales.",
      notas: " Varían según el estilo y la mezcla, ofreciendo aromas a cítricos, frutas de hueso, flores blancas y bollería.",
    },
    {
      id: 12,
      nombre: "Champagne Rosé Brut ",
      precio: 35000,
      categoria: "Espumante",
      descripcion: "Seco,cuerpo vibrante y frescura.",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_642451-MLA109753804287_032026-O.webp",


      origen: "Champagne, Francia",
      uva: "rojo,Vitis vinifera",
      alcohol: "12%",
      temperatura: "6°C y 8°C",
      maridaje: "Su acidez limpia el paladar, lo que lo hace ideal para pescados grasos (salmón), carnes ligeras (pato, cordero), quesos cremosos y postres de frutos rojos.",
      notas: " Combina la estructura del vino tinto y la acidez de blancos, ofreciendo aromas a frutos rojos, flores y una textura sedosa muy elegante",
    },
  ];

//lee el id del vino desde la ruta y busca el vino correspondiente en la lista de productos

   vino?: Producto;

  constructor(private route: ActivatedRoute) { } //

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vino = this.productos.find(p => p.id === id);

    console.log(id);

  }



  
}




