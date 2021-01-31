import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoneypaymentPageRoutingModule } from './moneypayment-routing.module';

import { MoneypaymentPage } from './moneypayment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoneypaymentPageRoutingModule
  ],
  declarations: [MoneypaymentPage]
})
export class MoneypaymentPageModule {}
