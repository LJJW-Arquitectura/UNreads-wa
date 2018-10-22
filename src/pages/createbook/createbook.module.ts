import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatebookPage } from './createbook';

@NgModule({
  declarations: [
    CreatebookPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatebookPage),
  ],
})
export class CreatebookPageModule {}
