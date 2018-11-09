//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nota } from './nota';
import { AngularFireDatabase } from '../../../node_modules/@angular/fire/database';
//import { Observable } from '../../../node_modules/rxjs-compat';
import { AngularFirestore } from '../../../node_modules/@angular/fire/firestore';
import { subscribeOn } from '../../../node_modules/rxjs/operator/subscribeOn';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  notas:Nota[] = [];
  
  currentNota:Nota;
  constructor(/*public http: HttpClient, */private db: AngularFireDatabase) {
   // this.notas.push(new Nota(1));
     let d:Observable<Nota[]> = db.list<Nota>('items').valueChanges();
     //db.list('items').push(this.notas);
     //console.log(d);

     d.subscribe(a =>{
       
       for (let index = 0; index < a.length; index++) {
         const element = a[index][0];
         this.notas.push(element);
       }
     });

     console.log('notas', this.notas);
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