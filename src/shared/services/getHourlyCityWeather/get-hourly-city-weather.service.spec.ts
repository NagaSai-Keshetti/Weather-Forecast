import { of } from 'rxjs';
import { IHourlyForecast } from 'src/shared';
import { GetHourlyCityWeatherService } from './get-hourly-city-weather.service';

describe('GetHourlyCityWeatherService', () => {
    let service: GetHourlyCityWeatherService;
    let mockHttpClient;
    let mockResponse: IHourlyForecast;
    mockHttpClient = {
        get: (url: string) => {
            return of(mockResponse);
        }
    };

    beforeEach(() => {
        service = new GetHourlyCityWeatherService(mockHttpClient);
    })

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('should return city hourly forecast from api', () => {
        let cityId = 1234;
        spyOn(service.http, 'get').and.returnValue(of(mockResponse));
        service.get(cityId);
        expect(service.http.get).toHaveBeenCalledWith('https://api.openweathermap.org/data/2.5/forecast?appid=975ad6374eb6b42b28774e386cd0e1f5&units=metric&id=1234');
    })


});
