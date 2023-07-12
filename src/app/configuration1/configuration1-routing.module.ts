import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Configuration1Page } from './configuration1.page';

const routes: Routes = [
  {
    path: '',
    component: Configuration1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Configuration1PageRoutingModule {}
