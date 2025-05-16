import { Injectable } from '@angular/core';
//IMPORTAR AIRTABLE
import Airtable from 'airtable';

import { Observable, from } from 'rxjs';

//Importar las variables de entorno
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class BaseDatosAirtableService{
  //Variables de conexion (credenciales)
  readonly apiKeyToken=environment.tokenAirtable;
  readonly idBaseDatos=environment.idBaseDatos;
  readonly nombreBaseDatos=environment.nombreBaseDatos;

  private base:any;
  constructor() { 
    Airtable.configure({
      endpointUrl:"https://api.airtable.com",
      apiKey:this.apiKeyToken
      
     //Id de la base de datos 

    });
    this.base=Airtable.base(this.idBaseDatos);
  }

  //mETODO PARA OBTENER LOS PRODUCTOS DE LA BASE DE DATOS
  obtenerDatos():
  Observable<any[]>{
    return from(new Promise<any[]>((resolve,reject)=>{
        const datosRegistro:any[]=[];
        this.base(this.nombreBaseDatos).select({
          view:'Grid view'
        }).eachPage(
          function page(registros: any[],siguienteRegistros: () => void)
          {
          registros.forEach(registro =>{
              datosRegistro.push({
                id: registro.id,
                nombre: registro.get("nombre"),
                precio: registro.get("precio"),
                descripcion: registro.get("descripcion"),
                imagen:registro.get("imagen")
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