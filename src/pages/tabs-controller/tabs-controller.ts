import { Component, ViewChild } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';
import { NotaPage } from '../nota/nota';
import { NotasPage } from '../notas/notas';
import { SettingsPage } from '../settings/settings';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  @ViewChild("tabs") tabs: Tabs;

  tab1Root: any = NotaPage;
  tab2Root: any = NotasPage;
  tab3Root: any = SettingsPage;

  currentTab: any = NotasPage;
  selectedIndex = 1;

  editEnable = false;
  configEnable = true;

  public static controller:TabsControllerPage;
  constructor(public navCtrl: NavController, data:DataServiceProvider) {
    TabsControllerPage.controller = this;
  }

  ngAfterViewInit() {
    setTimeout(() => {
    console.log(this.tabs);
    this.tabs.select(1);
    }, 500);
  }

  public EditNote(){
    this.tabs.select(0);
    this.editEnable = true;
    this.configEnable = false;
  }

  public ReturnToNotas(){
    this.tabs.select(1);
    this.editEnable = false;
    this.configEnable = true;
  }

  DisableEdit(){
    this.editEnable = false;
    this.configEnable = true;
  }
  
}
