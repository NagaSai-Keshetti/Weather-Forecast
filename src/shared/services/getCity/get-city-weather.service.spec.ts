import { of } from 'rxjs';
import { ICityWeather } from 'src/shared';
import { GetCityWeatherService } from './get-city-weather.service';

describe('GetCityWeatherService', () => {
    let service: GetCityWeatherService;
    let mockHttpClient;
    let mockResponse: ICityWeather;
    mockHttpClient = {
        get: (url: string) => {
            return of(mockResponse);
        }
    };

    beforeEach(() => {
        service = new GetCityWeatherService(mockHttpClient);
    })

    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('should return average temperature', () => {
        let data = { main: { temp_min: 2, temp_max: 4 } };
        let result = service.getAverageTemperature(data);
        expect(result.main.avg_temp).toEqual(3);
    })

    it('should return city weather from api', () => {
        let cityId = 1234;
        spyOn(service.http, 'get').and.returnValue(of(mockResponse));
        service.get(cityId);
        expect(service.http.get).toHaveBeenCalledWith('https://api.openweathermap.org/data/2.5/weather?appid=975ad6374eb6b42b28774e386cd0e1f5&units=metric&id=1234');
    })


});
