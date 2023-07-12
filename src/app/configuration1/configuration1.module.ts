import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Configuration1PageRoutingModule } from './configuration1-routing.module';

import { Configuration1Page } from './configuration1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Configuration1PageRoutingModule
  ],
  declarations: [Configuration1Page]
})
export class Configuration1PageModule {}
