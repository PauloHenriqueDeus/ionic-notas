import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  notas:Nota[] = [];

  constructor(public http: HttpClient) {
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
}

class Nota{
  name = "Nota "
  content = "Texto da nota.";
  data:number

  id = 0;
  
  constructor(id:number){
    this.id = id;
    this.name = name + id.toString();
    this.data = Date.now();
  }
}
