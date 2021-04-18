import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICityWeather } from 'src/shared';
import { restApi } from 'src/shared/constants';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GetCityWeatherService {

    constructor(public http: HttpClient) { }

    get(id: number) {
        return this.http.get(`${environment.baseURL}${restApi.city}?appid=${environment.appId}&units=metric&id=${id}`)
            .pipe(
                map((response: ICityWeather) => {
                    response = this.getAverageTemperature(response);
                    return response;
                })
            )
            .pipe(
                catchError((errors) => {
                    console.log(errors);
                    throw errors;
                }),
                map((response: ICityWeather) => {
                    return response;
                })
            )
    }

    getAverageTemperature(data) {
        data.main.avg_temp = (data.main.temp_min + data.main.temp_max) / 2;
        return data;
    }
}
