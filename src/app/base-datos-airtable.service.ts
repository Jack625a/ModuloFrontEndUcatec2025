import { Injectable } from '@angular/core';
//IMPORTAR AIRTABLE
import Airtable from 'airtable';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BaseDatosAirtableService{
  apiKeToken="";
  idBaseDatos="";
  nombreBaseDatos=""

  private base:any;
  constructor() { 
    Airtable.configure({
      apiKey:"",
      endpointUrl:"https://api.airtable.com'",

    });
    this.base=Airtable.base("");
  }

  //mETODO PARA OBTENER LOS PRODUCTOS DE LA BASE DE DATOS
  obtenerDatos():Observable<any[]>{
    return from(new Promise<any[]>((peticion,respuesta)=>{
        const datosRegistro: any[]=[];
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
        function falla(error: any){
          if(error){
            respuesta(error);
          }else{
            peticion(registros);
          }
        }
    );
  }));
}
}