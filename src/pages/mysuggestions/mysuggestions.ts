import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { Observable } from 'rxjs/Observable';  
import { GlobalProvider } from '../../providers/global/global';
import { InfobookPage } from '../infobook/infobook';

@IonicPage()
@Component({
	selector: 'page-mySuggestions',
	templateUrl: 'mySuggestions.html',
})
export class MySuggestionsPage {
	
	suggestions$
	auxid1 = []
	auxid2 = []
	myId
	user
	constructor(public navCtrl: NavController, 
		public navParams: NavParams,
		public globalProvider: GlobalProvider, 
		public provider: BooksProvider) {
		this.suggestions$ = provider.getUserSuggestionsByCode(this.globalProvider.authenticatedId);
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
