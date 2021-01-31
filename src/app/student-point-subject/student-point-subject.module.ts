import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentPointSubjectPageRoutingModule } from './student-point-subject-routing.module';

import { StudentPointSubjectPage } from './student-point-subject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentPointSubjectPageRoutingModule
  ],
  declarations: [StudentPointSubjectPage]
})
export class StudentPointSubjectPageModule {}
