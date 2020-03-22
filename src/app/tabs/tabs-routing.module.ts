import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'quickcalc',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/quick-calculator/quick-calculator.module').then(m => m.QuickCalculatorPageModule)
          }
        ]
      },
      {
        path: 'compare',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/compare/compare.module').then(m => m.ComparePageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/quickcalc',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/quickcalc',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
