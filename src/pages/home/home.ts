import { Component } from '@angular/core';  
import { NavController, NavParams } from 'ionic-angular';  
import { Observable } from 'rxjs/Observable';  
import { GlobalProvider } from '../../providers/global/global';

import { AllbooksPage } from '../allbooks/allbooks';
import { AllbooklistPage } from '../allbooklist/allbooklist';
import { CreatereviewPage } from '../createreview/createreview';
import { CreatesuggestionPage } from '../createsuggestion/createsuggestion';
import { InfobookPage } from '../infobook/infobook';
import { InfobooklistPage } from '../infobooklist/infobooklist';
import { LoginPage } from '../login/login';
import { MybooklistPage } from '../mybooklist/mybooklist';
import { ReadlistPage } from '../readlist/readlist';
import { CreatebookPage } from '../createbook/createbook'
import { MySuggestionsPage} from '../mysuggestions/mysuggestions';
import { MyReviewsPage} from '../myreviews/myreviews';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	
	books$: Observable<any>;
	public pages: Array<{title: string, component: any, openTab? : any,needLogin?: boolean,noNeedLogin?: boolean}>;

	constructor(public navCtrl: NavController, 
		public navParams: NavParams,
		public global: GlobalProvider,
        ) {
		this.pages = [
		{ title: 'Iniciar Sesion', component: LoginPage ,needLogin: false, noNeedLogin: true},
		{ title: 'Libros', component: AllbooksPage ,needLogin: false, noNeedLogin: false},
		{ title: 'Listas', component: AllbooklistPage ,needLogin: false, noNeedLogin: false},
		{ title: 'Mis listas', component: MybooklistPage ,needLogin: true, noNeedLogin: false},
		{ title: 'Mis libros leidos', component: ReadlistPage ,needLogin: true, noNeedLogin: false},
		{ title: 'Mis reseñas', component: MyReviewsPage ,needLogin: true, noNeedLogin: false},
		{ title: 'Mis sugerencias', component: MySuggestionsPage ,needLogin: true, noNeedLogin: false},
		{ title: 'Crear Libro', component: CreatebookPage ,needLogin: false, noNeedLogin: false},
		{ title: 'Crear sugerencia', component: CreatesuggestionPage ,needLogin: true, noNeedLogin: false},
		];
	}

	canShow(page){
		if(this.global.authenticatedId == 0){
			return !page.needLogin
		}else{
			return !page.noNeedLogin
		}
	}
}