import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySuggestionsPage } from './mysuggestions';

@NgModule({
  declarations: [
    MySuggestionsPage,
  ],
  imports: [
    IonicPageModule.forChild(MySuggestionsPage),
  ],
})
export class  MySuggestionsPageModule {}
