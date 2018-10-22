import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllbooklistPage } from './allbooklist';

@NgModule({
  declarations: [
    AllbooklistPage,
  ],
  imports: [
    IonicPageModule.forChild(AllbooklistPage),
  ],
})
export class AllbooklistPageModule {}
