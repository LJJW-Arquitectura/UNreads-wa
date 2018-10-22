import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { Observable } from 'rxjs/Observable';  
import { GlobalProvider } from '../../providers/global/global';


@IonicPage()
@Component({
	selector: 'page-myReviews',
	templateUrl: 'myReviews.html',
})
export class MyReviewsPage {
	
	reviews$
	aux = []
	myId
	user
	constructor(public navCtrl: NavController, 
		public navParams: NavParams,
		public globalProvider: GlobalProvider, 
		public provider: BooksProvider) {
			this.reviews$ = provider.getUserReviewsByCode(this.globalProvider.authenticatedId);
			this.reviews$.subscribe(review =>{
				for (var i = 0; i < review.length ; i++) {
					provider.getBookById(review[i].book_id).subscribe(book =>{
						this.aux.push(book.title)})
					}
				});
				this.myId = globalProvider.authenticatedId 
				this.user = globalProvider.user 
			} 
			
		}
		