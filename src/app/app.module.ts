import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NotaPage } from '../pages/nota/nota';
import { NotasPage } from '../pages/notas/notas';
import { SettingsPage } from '../pages/settings/settings';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { AngularFireModule } from '../../node_modules/@angular/fire';
import { AngularFireDatabaseModule } from '../../node_modules/@angular/fire/database';
import { AngularFirestoreModule } from '../../node_modules/@angular/fire/firestore';


@NgModule({
  declarations: [
    MyApp,
    NotaPage,
    NotasPage,
    SettingsPage,
    TabsControllerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBknCaqinBYkbcyUsYN_8CQWsd77I6gDHU",
      authDomain: "notas-e9c03.firebaseapp.com",
      databaseURL: "https://notas-e9c03.firebaseio.com",
      projectId: "notas-e9c03",
      storageBucket: "notas-e9c03.appspot.com",
      messagingSenderId: "507976603435"
    }, 'notas'), 
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotaPage,
    NotasPage,
    SettingsPage,
    TabsControllerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider
  ]
})
export class AppModule {}