import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nota } from '../../providers/data-service/nota';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { ThrowStmt } from '../../../node_modules/@angular/compiler';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';

@Component({
  selector: 'page-nota',
  templateUrl: 'nota.html'
})
export class NotaPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  @ViewChild('notaInput') inputNota: ElementRef;
  @ViewChild('textContainer') textNota: ElementRef;
  
  currentNota:Nota;
  editing = false;
  rightButton = "done-all";

  text:string;
  editText:string;

  constructor(public navCtrl: NavController, private data:DataServiceProvider) {
    
  }

  ngAfterViewInit(){
    this.currentNota = this.data.currentNota;
    this.text = this.currentNota.content;
  }

  Edit(){
    this.editing = true;
    this.rightButton = "checkmark";
    this.editText = this.text;

    //this.ResizeInput(); 
  }

  StopEditing(){
    this.rightButton = "done-all";
    this.editing = false;
    this.text = this.editText;
  }

  Save(){
    this.currentNota.content = this.text;
    this.data.currentNota = this.currentNota;

    this.data.Save();
  }

  RightButton(){
    if (this.editing){
      this.StopEditing();
    }
    else{
      this.Save();
      TabsControllerPage.controller.ReturnToNotas();
    }
  }
  
  ResizeInput() {
    this.inputNota.nativeElement.style.height = this.inputNota.nativeElement.scrollHeight + 'px';

    this.textNota.nativeElement.style.width = this.inputNota.nativeElement.style.width;
    this.textNota.nativeElement.style.height = this.inputNota.nativeElement.style.height;

  }
}
