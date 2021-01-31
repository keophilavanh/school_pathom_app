import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoneypaymentPage } from './moneypayment.page';

const routes: Routes = [
  {
    path: '',
    component: MoneypaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoneypaymentPageRoutingModule {}
