import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICityWeather } from 'src/shared';
import { GetCityWeatherService } from 'src/shared/services/getCity/get-city-weather.service';

@Component({
  selector: 'shared-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  @Input() cityId: number;
  city: ICityWeather;
  weatherIcon: string;

  constructor(public cityWeather: GetCityWeatherService,
    public router: Router) { }

  ngOnInit() {
    this.getCityWeather();
  }

  getCityWeather() {
    this.cityWeather.get(this.cityId).subscribe(response => {
      this.city = response;
      this.weatherIcon = 'http://openweathermap.org/img/wn/' + this.city.weather[0].icon + '.png'
    });
  }

  goToCityWeatherOverview() {
    this.router.navigate(['city', this.cityId]);
  }
}
