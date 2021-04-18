import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CityListModule } from 'src/features/city-list/city-list.module';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CityListModule,
    SharedModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
