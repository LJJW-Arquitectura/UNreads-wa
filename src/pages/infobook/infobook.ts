import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { UserProvider }  from '../../providers/user/user';
import { GlobalProvider }  from '../../providers/global/global';
import { Observable } from 'rxjs/Observable';  

/**
 * Generated class for the InfobookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-infobook',
 	templateUrl: 'infobook.html',
 })
 export class InfobookPage {
    book_id: number;
    book$: Observable<any>;
    reviews$ = []
    suggestions$ = []
    readed
   constructor(public navCtrl: NavController, public navParams: NavParams, public provider: BooksProvider,public provideruser: UserProvider,public globalProvider: GlobalProvider) {

     this.readed = false          
     this.book_id = navParams.get('id');
     this.book$ = provider.getBookById(this.book_id);
     provider.getBookReviewsByCode(this.book_id).subscribe(review =>{
       this.reviews$ = review
     });
     provider.getBookSuggestionsByCode(this.book_id).subscribe(suggestion =>{
       this.suggestions$ = suggestion
     });

     if (this.globalProvider.authenticatedId != 0) {
       this.provider.getReadbooks(this.globalProvider.authenticatedId).subscribe(list => {
         this.readed = list.books.indexOf(this.book_id) > -1
       })
     }
   }

   
   itemTapped(event, book_id) {
     this.navCtrl.popToRoot()
     this.navCtrl.push(InfobookPage, {
       id: book_id
     });
   }
   
   ionViewDidLoad() {

   }
   islogged(){
     if (this.globalProvider.authenticatedId != 0) {       
       return true
     }else{
       return false
     }
   }
   trackByFn(index, sugg) {
     return sugg.suggestion_id;
   }
   read(){
     this.provider.addBookToReadlist(this.globalProvider.authenticatedId,this.book_id)
     this.readed = true
   }



 }
