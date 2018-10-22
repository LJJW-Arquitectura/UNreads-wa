import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { Observable } from 'rxjs/Observable';  
import { filter } from 'rxjs/operators';  
import { InfobookPage } from '../infobook/infobook';
import { CreatereviewPage } from '../createreview/createreview';
/**
 * Generated class for the InfobooklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-infobooklist',
 	templateUrl: 'infobooklist.html',
 })
 export class InfobooklistPage {

 	list$
 	books$ = []
 	ready = false
 	readed = false
 	constructor(public navCtrl: NavController, public navParams: NavParams, public provider: BooksProvider) {
 		this.list$ = navParams.get('list')
 		for (var i = this.list$.books.length - 1; i >= 0; i--) {
 			provider.getBookById(this.list$.books[i]).subscribe(book => this.books$.push(book))
 		} 		
 		this.ready = true
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad InfobooklistPage');
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
