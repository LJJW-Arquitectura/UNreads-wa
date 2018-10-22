import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { InfobookPage } from '../infobook/infobook';
import { ToastController } from 'ionic-angular';
import { GlobalProvider } from "../../providers/global/global";

/**
* Generated class for the CreatesuggestionPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-createsuggestion',
  templateUrl: 'createsuggestion.html',
})
export class CreatesuggestionPage {
  book_id1: number;
	book_id2: number;
  reason: string;
  user
  myId

  Allbooks$
  booklist= [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: BooksProvider,
    public toastCtrl: ToastController, public globalProvider: GlobalProvider,) {
      this.myId = globalProvider.authenticatedId 
      this.user = globalProvider.user 
    provider.getAllBooks().subscribe(book => this.Allbooks$ = book);
  }
  
  createSuggestion(){
    console.log(this.myId, this.book_id1 , this.book_id2, this.reason);
    if(this.book_id1 == this.book_id2){
      this.showMessage('Los libros a recomendar deben ser diferentes');
    }else if(this.reason == null){
      this.showMessage('Todos los campos son obligatorios');
    }
    else{   
      this.provider.createSuggestion(this.myId, this.book_id1, this.book_id2, this.reason).subscribe(response => {
        console.log(response);
        this.navCtrl.push(InfobookPage, {
          id: this.book_id1
        });
      })}
    }
    showMessage(mensaje: string){
        const toast = this.toastCtrl.create({
          message: mensaje,
          duration: 3000
        });
        toast.present();
      } 

    ionViewDidLoad() {
      console.log('ionViewDidLoad CreatesuggestionPage');
    }
    
  }
  