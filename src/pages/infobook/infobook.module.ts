import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfobookPage } from './infobook';

@NgModule({
  declarations: [
    InfobookPage,
  ],
  imports: [
    IonicPageModule.forChild(InfobookPage),
  ],
})
export class InfobookPageModule {}
