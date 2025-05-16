import { Injectable } from '@angular/core';
//IMPORTAR AIRTABLE
import Airtable from 'airtable';

import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BaseDatosAirtableService{
  //Variables de conexion (credenciales)
  apiKeyToken="";
  idBaseDatos="";
  nombreBaseDatos=""

  private base:any;
  constructor() { 
    Airtable.configure({
      endpointUrl:"https://api.airtable.com",
      apiKey:"",
      
     //Id de la base de datos 

    });
    this.base=Airtable.base("");
  }

  //mETODO PARA OBTENER LOS PRODUCTOS DE LA BASE DE DATOS
  obtenerDatos():
  Observable<any[]>{
    return from(new Promise<any[]>((resolve,reject)=>{
        const datosRegistro:any[]=[];
        this.base("Productos").select({
          view:'Grid view'
        }).eachPage(
          function page(registros: any[],siguienteRegistros: () => void)
          {
          registros.forEach(registro =>{
              datosRegistro.push({
                id: registro.id,
                nombre: registro.get("Nombre"),
                descripcion: registro.get("Descripcion"),
                precio: registro.get("Precio"),
                imagen:registro.get("Imagen")
              });
          });
          siguienteRegistros();
        },
        function falla(error:any){
          if(error){
            reject(error);
          }else{
            resolve(datosRegistro);
          }
        }
    );
  }));
}
}