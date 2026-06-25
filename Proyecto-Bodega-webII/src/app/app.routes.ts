import { Routes } from '@angular/router';
import {Inicio} from './pages/inicio/inicio';
import { Nosotros } from './pages/nosotros/nosotros';
import {NotFound} from './pages/not-found/not-found';
import {Contactos} from './pages/contactos/contactos';
import {Productos} from './pages/productos/productos';


export const routes: Routes = [       
      { path:'', component: Inicio},
      {path:'productos',component:Productos},
     {path:'nosotros',component:Nosotros},
     {path:'contactos',component:Contactos},
     {path:'**',component:NotFound}
        
];
    
