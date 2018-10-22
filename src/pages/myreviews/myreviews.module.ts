import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyReviewsPage } from './myreviews';

@NgModule({
  declarations: [
    MyReviewsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyReviewsPage),
  ],
})
export class MyReviewsPageModule {}
