import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfobooklistPage } from './infobooklist';

@NgModule({
  declarations: [
    InfobooklistPage,
  ],
  imports: [
    IonicPageModule.forChild(InfobooklistPage),
  ],
})
export class InfobooklistPageModule {}
