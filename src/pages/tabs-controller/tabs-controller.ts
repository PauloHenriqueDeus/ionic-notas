import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotaPage } from '../nota/nota';
import { NotasPage } from '../notas/notas';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = NotaPage;
  tab2Root: any = NotasPage;
  tab3Root: any = SettingsPage;

  currentTab: any = NotasPage;
  editTab: any = null;
  constructor(public navCtrl: NavController) {
  }

  EditTab() : any{

    if (this.currentTab == NotasPage){
      
    }

  }
  
}
