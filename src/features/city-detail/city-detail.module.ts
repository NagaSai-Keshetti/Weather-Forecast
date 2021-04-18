import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CityDetailComponent } from './city-detail.component';
import { DesignElementsModule } from 'src/designElements/design-elements.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DesignElementsModule
  ],
  declarations: [CityDetailComponent],
  exports: [CityDetailComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CityDetailModule { }
