import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'    // Servicio disponible en toda la aplicación (providing root)
})
export class GalleryService {

  constructor(private http:HttpClient) { }  // Inyección de HttpClient en el constructor del servicio

  // Método para obtener fotos desde una API
  getPhotos():Observable<any>{
    // Realiza una solicitud GET a la URL especificada
    // Devuelve un Observable que emitirá la respuesta de la solicitud HTTP
    return this.http.get("http://localhost:3000/photos");
  }
}
