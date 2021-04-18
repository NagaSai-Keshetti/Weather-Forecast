import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IHourlyForecast } from 'src/shared';
import { restApi } from 'src/shared/constants';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GetHourlyCityWeatherService {

    constructor(public http: HttpClient) { }

    get(id: number) {
        return this.http.get(`${environment.baseURL}${restApi.hourlyForecast}?appid=${environment.appId}&units=metric&id=${id}`)
            .pipe(
                catchError((errors) => {
                    console.log(errors);
                    throw errors;
                }),
                map((response: IHourlyForecast) => {
                    return response;
                })
            )
    }
}
