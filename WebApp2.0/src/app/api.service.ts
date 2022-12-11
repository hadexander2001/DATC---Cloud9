import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { endpoints } from "./shared/endpoints";

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    constructor(private http: HttpClient) { }

    public postCoordinates = (date: Date, latitude: number, longitude: number) =>
        this.http.post(endpoints.location(), {
            time: date,
            location_latitude: latitude,
            location_longitude: longitude
        })
}