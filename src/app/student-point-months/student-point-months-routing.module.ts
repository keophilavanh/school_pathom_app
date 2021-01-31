import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentPointMonthsPage } from './student-point-months.page';

const routes: Routes = [
  {
    path: '',
    component: StudentPointMonthsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPointMonthsPageRoutingModule {}
