import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Calculo } from "../models/calculo";

@Injectable({
  providedIn: 'root'
})
export class MainService{
  private urlBase = environment.apiUrl;
  constructor (private http: HttpClient){ }

public calcularInversion(inicial: number, aportacion: number,
  porcentaje: number, anosInversion: number,rendimiento: number): Observable<Calculo[]> {

  let queryParams = new HttpParams ()
  if(inicial != null){
      queryParams = queryParams.append('inicial',inicial);
  }
  if(aportacion != null){
    queryParams = queryParams.append('aportacion',aportacion);
  }
  if(porcentaje != null){
    queryParams = queryParams.append('porcentaje',porcentaje);
  }
  if(anosInversion != null){
    queryParams = queryParams.append('anosInversion',anosInversion);
  }
  if(rendimiento != null){
    queryParams = queryParams.append('rendimiento',rendimiento);
  }
  return this.http.get<Calculo[]>(this.urlBase + '?', {params: queryParams});
}
}
