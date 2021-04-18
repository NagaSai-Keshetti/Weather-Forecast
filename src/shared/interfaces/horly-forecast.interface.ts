import { ICityWeather } from "./city-weather.interface";

export interface IHourlyForecast {
    city: ICityDetails,
    list: IExtendedCityWeather[],
    cod: string,
    message: number,
    cnt: number
}

export interface ICityDetails {
    id: number,
    name: string,
    coord: {
        lat: number,
        lon: number
    },
    country: string
}

export interface IExtendedCityWeather extends ICityWeather {
    dt_text: string
}