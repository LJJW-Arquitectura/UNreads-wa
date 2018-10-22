import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatebooklistPage } from './createbooklist';

@NgModule({
  declarations: [
    CreatebooklistPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatebooklistPage),
  ],
})
export class CreatebooklistPageModule {}
