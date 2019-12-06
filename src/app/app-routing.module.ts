import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'overnight-modal',
    loadChildren: () => import('./overnight-modal/overnight-modal.module').then( m => m.OvernightModalPageModule)
  },
  {
    path: 'log-alert',
    loadChildren: () => import('./log-alert/log-alert.module').then( m => m.LogAlertPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
