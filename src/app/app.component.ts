import { Component,ViewChild} from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AllbooksPage } from '../pages/allbooks/allbooks';
import { AllbooklistPage } from '../pages/allbooklist/allbooklist';
import { CreatereviewPage } from '../pages/createreview/createreview';
import { CreatesuggestionPage } from '../pages/createsuggestion/createsuggestion';
import { InfobookPage } from '../pages/infobook/infobook';
import { InfobooklistPage } from '../pages/infobooklist/infobooklist';
import { LoginPage } from '../pages/login/login';
import { MybooklistPage } from '../pages/mybooklist/mybooklist';
import { ReadlistPage } from '../pages/readlist/readlist';
import { CreatebookPage } from '../pages/createbook/createbook'
import { MySuggestionsPage} from '../pages/mysuggestions/mysuggestions';
import { MyReviewsPage} from '../pages/myreviews/myreviews';

import { GlobalProvider } from "../providers/global/global";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  username;
  myIcon: string;
  @ViewChild(Nav) nav: Nav;
  rootPage:any = AllbooksPage;
  public pages: Array<{title: string, component: any, openTab? : any,needLogin?: boolean,noNeedLogin?: boolean}>;
  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    public global: GlobalProvider) {

    this.pages = [
    { title: 'Login', component: LoginPage ,needLogin: false, noNeedLogin: true},
    { title: 'Libros', component: AllbooksPage ,needLogin: false, noNeedLogin: false},
    { title: 'Listas', component: AllbooklistPage ,needLogin: false, noNeedLogin: false},
    { title: 'Mis listas', component: MybooklistPage ,needLogin: true, noNeedLogin: false},
    { title: 'Mis libros leidos', component: ReadlistPage ,needLogin: true, noNeedLogin: false},
    { title: 'Mis reseñas', component: MyReviewsPage ,needLogin: true, noNeedLogin: false},
    { title: 'Mis sugerencias', component: MySuggestionsPage ,needLogin: true, noNeedLogin: false},
    { title: 'Crear Libro', component: CreatebookPage ,needLogin: false, noNeedLogin: false},
    { title: 'Crear sugerencia', component: CreatesuggestionPage ,needLogin: true, noNeedLogin: false},
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }

  canShow(page){
    if(this.global.authenticatedId == 0){
      return !page.needLogin
    }else{
      return !page.noNeedLogin
    }
  }

  isLoggedIn(){
    if(this.global.authenticatedId == 0){
      this.username = "Guest";
      return false;
    }else{
      this.username = this.global.user;
      return true;
    }
  }

  logout(){
    this.global.authenticatedId = 0;
    this.username = "Guest";
  }

  openPage(page, 
    ) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


}


