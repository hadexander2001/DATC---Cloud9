import { environment } from "src/environments/environment";

export const endpoints = {
    location: (): any => `${environment.apiUrl}`
}