import { Router } from '@angular/router';
import { of } from 'rxjs';
import { CityComponent } from './city.component';
import { ICityWeather } from '../../interfaces';

describe('CityComponent', () => {
  let component: CityComponent;
  let mockGetCityWeatherService;
  let mockResponse: ICityWeather = { weather: [{}] } as ICityWeather;
  mockGetCityWeatherService = {
    get: (id: number) => {
      return of(mockResponse);
    }
  };
  let router: Router;
  router = jasmine.createSpyObj('Router', ['navigate']);
  beforeEach(() => {
    component = new CityComponent(mockGetCityWeatherService, router);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to city page with id', () => {
    component.cityId = 1234;
    component.goToCityWeatherOverview();
    expect(component.router.navigate).toHaveBeenCalledWith(['city', 1234]);
  })

  it('should get city weather on OnInit', () => {
    const getCityWeatherSpy = spyOn(component, 'getCityWeather');
    component.ngOnInit();
    expect(getCityWeatherSpy).toHaveBeenCalled();
  })

  it('should get city weather data from service', () => {
    component.cityId = 1234;
    spyOn(component.cityWeather, 'get').and.returnValue(of(mockResponse));
    component.getCityWeather();
    expect(component.cityWeather.get).toHaveBeenCalledWith(1234);
  })
});
