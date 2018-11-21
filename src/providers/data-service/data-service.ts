//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nota } from './nota';
import { AngularFireDatabase } from '../../../node_modules/@angular/fire/database';
import { AngularFirestore } from '../../../node_modules/@angular/fire/firestore';
import { subscribeOn } from '../../../node_modules/rxjs/operator/subscribeOn';
import { Observable } from '../../../node_modules/rxjs';
import { map } from 'rxjs/operators';

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

    //  let d:Observable<Nota[]> = db.list<Nota>('items').valueChanges();

    //  d.subscribe(a =>{   
    //   this.notas.splice(0, this.notas.length);
    //   for (let index = 0; index < a.length; index++) {
    //      const element = a[index];
    //      this.notas.push(element);
    //    }
    //  });

    let s = db.list('items').snapshotChanges()
    .subscribe(actions => {
      this.notas.splice(0, this.notas.length);
      actions.forEach(action => {
        const element = action.payload.val() as Nota;
        element.dataBaseKey = action.key;

        // console.log(action.type);
        // console.log(action.key);
        // console.log(element);

        this.notas.push(element);
      });
    });

    console.log(s);
  }

  NewNota(){
    let i = 0;
    this.notas.forEach(nota => {
      if (nota.id >= i){
        i = nota.id+1;
      }
    });
    let nota;

    //this.notas.push(nota = new Nota(i));
    this.db.list<Nota>('items').push(new Nota(i));

    console.log("Push new nota");
  }

  Save(){
    this.db.list('items').set(this.currentNota.dataBaseKey, this.currentNota);
  }

  SelectNota(id:number){
    this.notas.forEach(nota => {
      if (nota.id == id){
        this.currentNota = nota;
      }
    });
  }
}