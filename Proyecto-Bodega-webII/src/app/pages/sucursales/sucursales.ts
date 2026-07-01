import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-sucursales",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./sucursales.html",
  styleUrl: "./sucursales.css",
})
export class Sucursales {
  sucursales = [
    {
      ciudad: "Buenos Aires",
      direccion: "Av. Corrientes 1250",
      telefono: "+54 11 4567-1234",
      imagen:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800",
      mapa: "https://maps.google.com",
    },
    {
      ciudad: "Luján de Cuyo, Mendoza",
      direccion: "San Martín 2044",
      telefono: "+54 261 456-7890",
      imagen:
        "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEo0rjhxLXo-gvcUfur99C9fNoVIM7uSXGv4Uwoz-OYg5W7KisM4PJHQGxRBJpl195ml6CSXDH9GHvYlSvcb3aDjn5P9iii9AjbG2Ru7HRE8xENJwfyiAJZZYMIAGxvkyLUKoGG=w714-h240-k-no",
      mapa: "https://maps.google.com",
    },
    {
      ciudad: "General Roca",
      direccion: "Chacra 186",
      telefono: "+54 351 444-2211",
      imagen:
       "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFz7IMtwg-PFJXLskP2RnulLUG-xd3bECX4RJTkD2IcAuwevsJTkih20tnFAy_6iQWqNciNe_ytmE1qJgds4xfExYA3gb3ahEUYSIWERpB7HajM_CbEo1un79R_bETyL9br8_MW=w408-h306-k-no",
      mapa: "https://maps.google.com",
    },
    {
      ciudad: "Cipolleti, Río Negro",
      direccion: "Maestro espinosa 2608 ",
      telefono: "+54 299 572 6255",
      imagen:
        "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHQmGQ1iZm75MOJCyBMSkthlf7FmKx6judgqxXaIm3rr6ZiJVWoCK89iixPRtmPyUJ1bw8QQTTeDVJHT8FUNjRbOi8J1wUktItMSNIpEnjVf-pagdfWyLe3omA5Qerql3FTwVOeWVw3Nqo=w426-h240-k-no",
      mapa: "https://www.google.com/maps/place/Cipolleti,+R%C3%ADo+Negro",
    },
    {
      ciudad: "San Patricio del Chañar, Neuquén",
      direccion: "Ruta Provincial 45",
      telefono: "+54 299 489-4500",
      imagen:
        "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGvCzXgk0g9Ws7f3Ggqa3rSyMkZrF1W861h0H57mNanLNY5MG6YnfCMrW4bx4Z73Jz-8995A0IgU4HJrBwNhAF5wNJ3HGX3WO_rG4Nqtr_Cxa_t6O5bewj_oBWi99_hHiY_=w426-h240-k-no",
      mapa: "https://www.google.com/maps/place/San+Patricio+del+Chañar,+Neuquén",
    },
  ];
}
