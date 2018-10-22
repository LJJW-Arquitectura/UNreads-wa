import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadlistPage } from './readlist';

@NgModule({
  declarations: [
    ReadlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadlistPage),
  ],
})
export class ReadlistPageModule {}
