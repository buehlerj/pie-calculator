import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuickCalculatorPage } from './quick-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: QuickCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuickCalculatorPageRoutingModule {}
