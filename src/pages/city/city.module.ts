import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CityPageRoutingModule } from './city-routing.module';

import { CityPage } from './city.page';
import { CityDetailModule } from 'src/features/city-detail/city-detail.module';
import { SharedModule } from 'src/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CityPageRoutingModule,
    CityDetailModule,
    SharedModule
  ],
  declarations: [CityPage]
})
export class CityPageModule { }
