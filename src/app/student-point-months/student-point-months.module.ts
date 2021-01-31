import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentPointMonthsPageRoutingModule } from './student-point-months-routing.module';

import { StudentPointMonthsPage } from './student-point-months.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentPointMonthsPageRoutingModule
  ],
  declarations: [StudentPointMonthsPage]
})
export class StudentPointMonthsPageModule {}
