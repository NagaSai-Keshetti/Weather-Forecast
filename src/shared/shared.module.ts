import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CityComponent } from './components/city/city.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { GetCityWeatherService } from './services/getCity/get-city-weather.service';
import { RouterModule } from '@angular/router';
import { DesignElementsModule } from 'src/designElements/design-elements.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    DesignElementsModule
  ],
  declarations: [CityComponent, PageLayoutComponent, PageTitleComponent],
  exports: [CityComponent, PageLayoutComponent, PageTitleComponent],
  providers: [GetCityWeatherService]
})
export class SharedModule { }
