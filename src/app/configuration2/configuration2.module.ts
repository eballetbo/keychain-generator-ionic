import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Configuration2PageRoutingModule } from './configuration2-routing.module';

import { Configuration2Page } from './configuration2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Configuration2PageRoutingModule
  ],
  declarations: [Configuration2Page]
})
export class Configuration2PageModule {}
