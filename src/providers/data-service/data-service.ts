//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nota } from './nota';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  notas:Nota[] = [];

  currentNota:Nota;
  constructor(/*public http: HttpClient*/) {
    this.NewNota();   
  }

  NewNota(){
    let i = 0;
    this.notas.forEach(nota => {
      if (nota.id > i){
        i = nota.id;
      }
    });
    this.notas.push(new Nota(i));
  }

  SelectNota(id:number){
    this.notas.forEach(nota => {
      if (nota.id == id){
        this.currentNota = nota;
      }
    });
  }
}