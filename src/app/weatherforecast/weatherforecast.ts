import { environment } from "src/environments/environment";

const { apiUrl } = environment;

export interface WeatherForecast {
    date?: Date;
    temperatureC?: number;
    temperatureF?: number;
    summary?: string;
}

export interface Employee {
    id?: number;
    name?: string;
    description?: string;
    email?: string;
}

export interface IApiUrls {
    readonly WeatherForecast: string;
}


export const ApiUrls: IApiUrls = {
    WeatherForecast: apiUrl + "WeatherForecast"
}