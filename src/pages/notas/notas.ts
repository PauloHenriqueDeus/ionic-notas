import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotaPage } from '../nota/nota';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Nota } from '../../providers/data-service/nota';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html'
})
export class NotasPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  notas:Nota[];
  constructor(public navCtrl: NavController, private data:DataServiceProvider) {
    this.notas = this.data.notas;
  }

  goToNota(nota:Nota){
    this.data.SelectNota(nota.id);
    TabsControllerPage.controller.EditNote();
    //this.navCtrl.push(NotaPage);
  }
}
