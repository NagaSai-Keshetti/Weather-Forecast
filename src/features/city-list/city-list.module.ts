import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { IonicModule } from '@ionic/angular';
import { CityListComponent } from './city-list.component';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    SharedModule
  ],
  declarations: [CityListComponent],
  exports: [CityListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CityListModule { }
