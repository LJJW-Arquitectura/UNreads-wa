import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { GlobalProvider } from '../../providers/global/global';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
	selector: 'page-createbooklist',
	templateUrl: 'createbooklist.html',
})
export class CreatebooklistPage {

	name 
	myId
	user
	booklist = [];

	books$
	Allbooks$
	searchTerm: string = '';

	constructor(public navCtrl: NavController, 
		public navParams: NavParams,
		public provider: BooksProvider,
		public globalProvider: GlobalProvider,) {

		provider.getAllBooks().subscribe(book => this.Allbooks$ = book);
		provider.getAllBooks().subscribe(book => this.books$ = book);
		this.myId = globalProvider.authenticatedId 
		this.user = globalProvider.user 
	}
	setFilteredItems(){
		this.provider.getAllBooks().subscribe(book => this.Allbooks$ = book);
		this.books$ = this.Allbooks$.filter((item) => item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1)
	}
	trackByFn(index, book) {
		return book.id;
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad CreatebooklistPage');
	}

	checkBook(book){
		var id = book.id
		var inx = this.booklist.indexOf(id)
		if(inx > -1){
			var indx = this.booklist.indexOf(id)
			this.booklist.splice(indx, 1);
		}else{
			this.booklist.push(id)			
		}
	}

	createBooklist(){
		if(this.name == undefined || this.booklist == undefined || this.booklist == []){
			alert ("Please fill all fields")
		}else{
			this.provider.createBooklist(this.name,this.user,this.myId,this.booklist)
			this.navCtrl.pop();
		}
		
	}

}
