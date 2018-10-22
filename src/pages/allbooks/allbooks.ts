import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { Observable } from 'rxjs/Observable';  
import { InfobookPage } from '../infobook/infobook';
import { CreatebookPage } from '../createbook/createbook';
import { CreatereviewPage } from '../createreview/createreview';
import { GlobalProvider } from '../../providers/global/global';

/**
 * Generated class for the AllbooksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-allbooks',
 	templateUrl: 'allbooks.html',
 })
 export class AllbooksPage {

 	books$
 	Allbooks$
 	searchTerm: string = '';
 	pro
	refresh = true
	myId
	user
 	constructor(public navCtrl: NavController, 
				public navParams: NavParams,
		 		public globalProvider: GlobalProvider, 
 				public provider: BooksProvider) {
 		this.pro = provider
 		provider.getAllBooks().subscribe(book => this.Allbooks$ = book);
		provider.getAllBooks().subscribe(book => this.books$ = book);
		this.myId = globalProvider.authenticatedId 
		this.user = globalProvider.user 
 	} 
 	setFilteredItems(){
 		this.pro.getAllBooks().subscribe(book => this.Allbooks$ = book);
 		this.books$ = this.Allbooks$.filter((item) => item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1)
 	} 	
 	trackByFn(index, book) {
 		return book.id;
 	}

	viewMore(event, book_id) {
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

	islogged(){
		if (this.globalProvider.authenticatedId != 0) {       
		  return true
		}else{
		  return false
		}
  }

	showCreateBook() {
		this.navCtrl.push(CreatebookPage);
	}

}
