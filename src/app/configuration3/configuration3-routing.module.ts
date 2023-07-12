import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Configuration3Page } from './configuration3.page';

const routes: Routes = [
  {
    path: '',
    component: Configuration3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Configuration3PageRoutingModule {}
