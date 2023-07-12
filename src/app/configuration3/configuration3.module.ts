import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Configuration3PageRoutingModule } from './configuration3-routing.module';

import { Configuration3Page } from './configuration3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Configuration3PageRoutingModule
  ],
  declarations: [Configuration3Page]
})
export class Configuration3PageModule {}
