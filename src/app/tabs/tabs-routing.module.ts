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
        path: 'ratings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/ratings/ratings.module').then(m => m.RatingsPageModule)
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
