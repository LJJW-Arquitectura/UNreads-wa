import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { GlobalProvider } from '../../providers/global/global';
import { Observable } from 'rxjs/Observable';  
import { InfobookPage } from '../infobook/infobook';
import { CreatereviewPage } from '../createreview/createreview';


/**
 * Generated class for the ReadlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-readlist',
 	templateUrl: 'readlist.html',
 })
 export class ReadlistPage {

 	books$ = []
 	myId
 	refresh = true
 	ready = false
 	constructor(public navCtrl: NavController, 
 		public navParams: NavParams,
 		public provider: BooksProvider,
 		public globalProvider: GlobalProvider) {
 		
 		this.myId = globalProvider.authenticatedId
 		provider.getReadbooks(this.myId).subscribe(list => {
 			var newbook = []
 			for (var i = list.books.length - 1; i >= 0; i--) { 				
 				provider.getBookById(list.books[i]).subscribe(book => {
 					newbook.push(book)})}
 			this.books$ = newbook
 		})
 		this.ready = true
 	}
 	trackByFn(index, book) {
 		return book.id;
 	}
 	itemTapped(event, book_id) {
 		this.navCtrl.push(InfobookPage, {
 			id: book_id
 		});
	 }

	createReview(event, book_id, book_title) {
		this.navCtrl.push(CreatereviewPage, {
			id: book_id,
			title: book_title
		});
	}

 }
