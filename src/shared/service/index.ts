import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BASE_URL, LOCATION_ENDPOINT, SEARCH_ENDPOINT } from "./endpoints";

@Injectable()
export class DataService {
  
  constructor(private http: HttpClient) {}

  validateResponse(response: any) {
    return response && response?.length > 0;
  }

  searchLocation(inputValue: string) {    
    return this.http.get(BASE_URL + LOCATION_ENDPOINT + SEARCH_ENDPOINT + inputValue);
  }

  getWeatherInfo(woeid: string, data: string) {
    return this.http.get(BASE_URL + LOCATION_ENDPOINT + woeid + "/" +  data);
  }

}