import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { InfobookPage } from '../infobook/infobook';
import { ToastController } from 'ionic-angular';
import { GlobalProvider } from "../../providers/global/global";
import { MySuggestionsPage} from '../mysuggestions/mysuggestions';

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
  book1
	book2
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
    
    this.book1 = this.book1.toString().split(",");   
    this.book2 = this.book2.toString().split(",");
    
    this.book1[0] = Number(this.book1[0])
    this.book2[0] = Number(this.book2[0])  

    if(this.book1[0] == this.book2[0]){
      this.showMessage('Los libros a recomendar deben ser diferentes');
    }else if(this.reason == null){
      this.showMessage('Todos los campos son obligatorios');
    }
    else{   
      this.provider.createSuggestion(this.myId, this.book1[0], this.book2[0], this.reason,this.book1[1], this.book2[1],this.user).subscribe(response => {      
        
        this.navCtrl.setRoot(MySuggestionsPage);
        this.navCtrl.popToRoot();
        this.navCtrl.push(InfobookPage, {
          id: this.book1[0]
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
  


