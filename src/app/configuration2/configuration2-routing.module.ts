import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Configuration2Page } from './configuration2.page';

const routes: Routes = [
  {
    path: '',
    component: Configuration2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Configuration2PageRoutingModule {}
