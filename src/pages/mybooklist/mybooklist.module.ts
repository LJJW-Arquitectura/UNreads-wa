import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MybooklistPage } from './mybooklist';

@NgModule({
  declarations: [
    MybooklistPage,
  ],
  imports: [
    IonicPageModule.forChild(MybooklistPage),
  ],
})
export class MybooklistPageModule {}
