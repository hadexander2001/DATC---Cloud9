import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { endpoints } from "./shared/endpoints";
import { MapResponse } from "./shared/map-response";

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    constructor(private http: HttpClient) { }

    public postCoordinates = (date: Date, latitude: number, longitude: number) =>
        this.http.post<MapResponse>(endpoints.location(), {
            time: date,
            location_latitude: latitude,
            location_longitude: longitude
        })

    public getSignals = () => this.http.get<MapResponse>(endpoints.location())
}