import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuickCalculatorPageRoutingModule } from './quick-calculator-routing.module';

import { QuickCalculatorPage } from './quick-calculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuickCalculatorPageRoutingModule
  ],
  declarations: [QuickCalculatorPage]
})
export class QuickCalculatorPageModule {}
