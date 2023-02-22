import { Component, OnInit } from '@angular/core';
import { MainService } from './services/mainService';
import { Calculo } from './models/calculo';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  inicial: number;
  aportacion: number;
  porcentaje: number;
  anosInversion: number;
  rendimiento: number;

  calculo = Observable<Calculo[]>;
  dataSource:  MatTableDataSource<Calculo>;
  displayedColumns: String[] = ['anos','saldoInic','aportacion2','rendimiento2', 'saldoFin'];

  constructor(private mainService : MainService){
    this.inicial =0;
    this.aportacion=0;
    this.porcentaje=0;
    this.anosInversion=0;
    this.rendimiento=0;
    this.dataSource = new MatTableDataSource;
  }

  ngOnInit(): void {
  }

  CalcularInversion(): void{
    this.mainService.calcularInversion(this.inicial,this.aportacion,this.porcentaje,this.anosInversion,this.rendimiento).
    subscribe(data=> {
      if(data != null){
        this.dataSource.data = data;;
        console.log(data)
    }});
  }
}
