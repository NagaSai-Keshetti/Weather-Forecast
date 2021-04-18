import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IExtendedCityWeather, IHourlyForecast } from 'src/shared';
import { GetHourlyCityWeatherService } from 'src/shared/services/getHourlyCityWeather/get-hourly-city-weather.service';

@Component({
  selector: 'feature-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss'],
})
export class CityDetailComponent implements OnInit {
  cityId: number;
  weatherForecast: IHourlyForecast;
  currentWeather: IExtendedCityWeather;

  constructor(private route: ActivatedRoute,
    public forecast: GetHourlyCityWeatherService) {
    this.route.params.subscribe(params => {
      this.cityId = params.cityId;
    })
  }

  ngOnInit() {
    this.getHourlyForecast();
  }

  getHourlyForecast() {
    this.forecast.get(this.cityId).subscribe(response => {
      this.weatherForecast = response;
      this.currentWeather = this.weatherForecast.list[0];
    })
  }
}
