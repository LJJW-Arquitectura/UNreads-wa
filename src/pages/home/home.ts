import { Component } from '@angular/core';  
import { NavController, NavParams } from 'ionic-angular';  
import { Observable } from 'rxjs/Observable';  
import { BooksProvider } from '../../providers/books/books';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
  books$: Observable<any>;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public provider: BooksProvider) {
    this.books$ = provider.getAllBooks();
  }
}