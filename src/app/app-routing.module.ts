import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Configuration1Page } from './configuration1/configuration1.page';
import { Configuration2Page } from './configuration2/configuration2.page';
import { Configuration3Page } from './configuration3/configuration3.page';

const routes: Routes = [
  { path: '', redirectTo: 'configuration1', pathMatch: 'full' },
  { path: 'configuration1', component: Configuration1Page },
  { path: 'configuration2', component: Configuration2Page },
  { path: 'configuration3', component: Configuration3Page },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'configuration1',
    loadChildren: () => import('./configuration1/configuration1.module').then( m => m.Configuration1PageModule)
  },
  {
    path: 'configuration2',
    loadChildren: () => import('./configuration2/configuration2.module').then( m => m.Configuration2PageModule)
  },
  {
    path: 'configuration3',
    loadChildren: () => import('./configuration3/configuration3.module').then( m => m.Configuration3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
