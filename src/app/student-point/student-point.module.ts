import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentPointPageRoutingModule } from './student-point-routing.module';

import { StudentPointPage } from './student-point.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentPointPageRoutingModule
  ],
  declarations: [StudentPointPage]
})
export class StudentPointPageModule {}
