import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentPointSubjectPage } from './student-point-subject.page';

const routes: Routes = [
  {
    path: '',
    component: StudentPointSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPointSubjectPageRoutingModule {}
