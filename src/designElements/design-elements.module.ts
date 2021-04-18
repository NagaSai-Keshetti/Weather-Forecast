import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { DirectionComponent } from './direction/direction.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { WindComponent } from './wind/wind.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [DirectionComponent, TemperatureComponent, WindComponent],
  exports: [DirectionComponent, TemperatureComponent, WindComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DesignElementsModule { }
