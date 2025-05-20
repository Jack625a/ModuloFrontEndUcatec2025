import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//Importacion del modulo
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
//Common MOdule
import { CommonModule } from '@angular/common';

//Importacion de LA BASE DE DATOS de airtable
import { BaseDatosAirtableService } from './base-datos-airtable.service';

//Importar el inicio de sesion
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatCardModule, CommonModule,MatButtonModule,
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//
export class AppComponent {

  //Lista de producto de la base de datos
  datos:any[]=[];
  constructor(private airtableService: BaseDatosAirtableService){}

  //Gestion de estados 
  ngOnInit():void{
    this.airtableService.obtenerDatos().subscribe(
      (data)=>{
        this.datos=data;
      },(error)=>{
        console.error("Error al obtener los datos ",error);
      }
    );
  }


  title = 'componentes';

  /*datos=[
    {
      nombre:'Producto 1',
      descripcion:'Descripcion producto 1',
      precio:150,
      imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/h/p/hp_15_ef2517la.jpg'
    },
    {
      nombre:'Producto 2',
      descripcion:'Descripcion producto 2',
      precio:350,
      imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/a/s/asus_e1504fa-nj697.jpg'
    },
    {
      nombre:'Producto 3',
      descripcion:'Descripcion producto 3',
      precio:450,
      imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/c/0/c01269.jpg'
    },
    {
      nombre:'Producto 4',
      descripcion:'Descripcion producto 4',
      precio:1050,
      imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/h/p/hp_15_ef2517la.jpg'
    },
    {
      nombre:'Producto 5',
      descripcion:'Descripcion producto 5',
      precio:3150,
      imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/h/p/hp_15_ef2517la.jpg'
    },
     {
      nombre:'Producto 6',
      descripcion:'Descripcion producto 6',
      precio:3150,
      imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/h/p/hp_15_ef2517la.jpg'
    },
     {
      nombre:'Producto 7',
      descripcion:'Descripcion producto 7',
      precio:3150,
      imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/h/p/hp_15_ef2517la.jpg'
    },
     {
      nombre:'Producto 8',
      descripcion:'Descripcion producto 8',
      precio:3150,
      imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/h/p/hp_15_ef2517la.jpg'
    },
     {
      nombre:'Producto 9',
      descripcion:'Descripcion producto 9',
      precio:3150,
      imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/h/p/hp_15_ef2517la.jpg'
    },
     {
      nombre:'Producto 10',
      descripcion:'Descripcion producto 10',
      precio:3150,
      imagen:'https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/h/p/hp_15_ef2517la.jpg'
    },
  ]*/
}
