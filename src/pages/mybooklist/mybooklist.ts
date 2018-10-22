import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { Observable } from 'rxjs/Observable';
import { InfobooklistPage } from '../infobooklist/infobooklist';
import { CreatebooklistPage } from '../createbooklist/createbooklist';
import {GlobalProvider} from '../../providers/global/global';

/**
 * Generated class for the MybooklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mybooklist',
  templateUrl: 'mybooklist.html',
})
export class MybooklistPage {

  	Alllist$ = []
 	lists$  = []
 	searchTerm: string = '';
 	myid
 	constructor(public navCtrl: NavController, 
 		public navParams: NavParams,
 		public provider: BooksProvider,
 		public globalprovider: GlobalProvider) {
 		this.myid = globalprovider.authenticatedId 		
 		provider.getBooklistByuser(this.myid).subscribe(list => this.Alllist$ = list);
 		provider.getBooklistByuser(this.myid).subscribe(list => this.lists$ = list);

 	} 


 	setFilteredItems(){
 		this.provider.getBooklistByuser(this.myid).subscribe(list => this.Alllist$ = list);
 		this.lists$ = this.Alllist$.filter((item) => item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1)
 	}

 	trackByFn(index, list) {
 		return list.name + list.user;
 	}

 	itemTapped(event, _list) {
 		this.navCtrl.push(InfobooklistPage, {
 			list: _list
 		});
 	}

 	ionViewDidEnter(){
 		if(this.Alllist$ != undefined)this.setFilteredItems()
 	}
 	createBooklist(){
 		this.navCtrl.push(CreatebooklistPage);	
 	}

}
