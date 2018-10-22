import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { Observable } from 'rxjs/Observable';  
import { AllbooksPage } from '../allbooks/allbooks';
import { InfobookPage } from '../infobook/infobook';

@IonicPage()
@Component({
  selector: 'page-createbook',
  templateUrl: 'createbook.html',
})
export class CreatebookPage {
	title: string;
	publiser: string;
	numPages: number;
  isbn: string;
  plot: string;
  authors: Array<string>;
  genres: Array<string>;
  author: string;
  genre: string;
  id$

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: BooksProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatebookPage');
  }

  addAuthor(){
    if (!this.authors) {this.authors = []}
    this.authors.push(this.author);
  }

  addGenre(){
    if (!this.genres) {this.genres = []}
    this.genres.push(this.genre);
  }

  createBook(){
    if(this.title == undefined || 
  		this.publiser == undefined || 
      this.numPages == undefined ||
      this.plot == undefined ||
      this.authors == undefined ||
      this.genres == undefined ||
  		this.isbn == undefined){
  		alert ("Please fill all fields")
  	}else {
      this.provider.createBook(this.title, this.publiser, this.numPages, this.isbn, this.plot, this.authors, this.genres).subscribe(response => {
        this.navCtrl.push(InfobookPage, {
          id: response.data.createBook.id
        });
      })
    }
  }
}
