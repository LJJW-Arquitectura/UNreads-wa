import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { Observable } from 'rxjs/Observable';  
import { GlobalProvider } from '../../providers/global/global';
import { InfobookPage } from '../infobook/infobook';


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
		
		this.myId = globalProvider.authenticatedId 
		this.user = globalProvider.user 
	} 
	
	itemTapped(event, book_id) {
		this.navCtrl.popToRoot()
		this.navCtrl.push(InfobookPage, {
			id: book_id
		});
	}
	
}
