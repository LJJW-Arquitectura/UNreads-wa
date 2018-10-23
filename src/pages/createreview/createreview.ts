import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';
import { BooksProvider } from '../../providers/books/books';
import { Events } from 'ionic-angular';
import { InfobookPage } from '../infobook/infobook';
import { MyReviewsPage} from '../myreviews/myreviews';

@IonicPage()
@Component({
  selector: 'page-createreview',
  templateUrl: 'createreview.html',
})
export class CreatereviewPage {
  book_id: number;
  book_title: string;
  review: string;
  grade: number = 0;
  myId
	user

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public globalProvider: GlobalProvider, 
              public provider: BooksProvider,
              public events: Events) {
    this.book_id = navParams.get('id');
    this.book_title = navParams.get('title');
    this.myId = globalProvider.authenticatedId 
    this.user = globalProvider.user 
    events.subscribe('star-rating:changed', (starRating) => {this.grade = starRating});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatereviewPage');
  }

  createReview(){
    if (this.review == undefined){
      alert("Please fill all fields");
    } else {
      this.provider.createReview(this.book_id, this.myId, this.review, this.grade,this.book_title,this.user).subscribe(response => {
        this.navCtrl.pop();
        this.navCtrl.push(MyReviewsPage); 
        this.navCtrl.push(InfobookPage, {
          id: this.book_id
        });

      })
    }
  }

}
