import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { GraphQLModule } from './graphql.module';

import { BooksProvider } from '../providers/books/books';
import { UserProvider } from '../providers/user/user';
import { HomePage } from '../pages/home/home';
import { AllbooksPage } from '../pages/allbooks/allbooks';
import { AllbooklistPage } from '../pages/allbooklist/allbooklist';
import { CreatereviewPage } from '../pages/createreview/createreview';
import { CreatesuggestionPage } from '../pages/createsuggestion/createsuggestion';
import { InfobookPage } from '../pages/infobook/infobook';
import { InfobooklistPage } from '../pages/infobooklist/infobooklist';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { GlobalProvider } from '../providers/global/global';
import { MybooklistPage } from '../pages/mybooklist/mybooklist';
import { ReadlistPage } from '../pages/readlist/readlist';
import { CreatebooklistPage } from '../pages/createbooklist/createbooklist';
import { CreatebookPage } from '../pages/createbook/createbook'
import { MyReviewsPage } from '../pages/myreviews/myreviews'
import { MySuggestionsPage} from '../pages/mysuggestions/mysuggestions';

import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
  MyApp,
  HomePage,
  AllbooksPage,
  AllbooklistPage,
  CreatereviewPage,
  CreatesuggestionPage,
  InfobookPage,
  InfobooklistPage,
  LoginPage,
  RegisterPage,
  MybooklistPage,
  CreatebooklistPage,
  CreatebookPage,
  ReadlistPage,
  MyReviewsPage,
  MySuggestionsPage,
  ],
  imports: [
  BrowserModule,
  IonicModule.forRoot(MyApp),
  GraphQLModule,
  StarRatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  HomePage,
  AllbooksPage,
  AllbooklistPage,
  CreatereviewPage,
  CreatesuggestionPage,
  InfobookPage,
  InfobooklistPage,
  LoginPage,
  RegisterPage,
  MybooklistPage,
  CreatebooklistPage,
  CreatebookPage,
  ReadlistPage,
  MyReviewsPage,
  MySuggestionsPage,
  ],
  providers: [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler},
  BooksProvider,
  UserProvider,
  GlobalProvider
  ]
})



export class AppModule {
}
