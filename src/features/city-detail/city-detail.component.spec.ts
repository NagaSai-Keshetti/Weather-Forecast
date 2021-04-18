import { CityDetailComponent } from './city-detail.component';
import { IHourlyForecast } from '../../shared'
import { of } from 'rxjs';


describe('CityDetailComponent', () => {
  let component: CityDetailComponent;
  let mockResponse: IHourlyForecast = { list: [] } as IHourlyForecast;
  let mockActivatedRoute;
  let mockForecastService;
  mockActivatedRoute = {
    params: of({ cityId: 1234 })
  };
  mockForecastService = {
    get: (id: number) => {
      return of(mockResponse);
    }
  }

  beforeEach(() => {
    component = new CityDetailComponent(mockActivatedRoute, mockForecastService);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should forecast data on OnInit', () => {
    let forecastSpy = spyOn(component, 'getHourlyForecast');
    component.ngOnInit();
    expect(forecastSpy).toHaveBeenCalled();
  })

  it('should get hourly forecast data from service', () => {
    component.cityId = 1234;
    spyOn(component.forecast, 'get').and.returnValue(of(mockResponse));
    component.getHourlyForecast();
    expect(component.forecast.get).toHaveBeenCalledWith(1234);
  })
});
