import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from 'src/environments/environments'
import { StreamingData } from '../models/streamingInfo.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StreamingInfoService {

  constructor(private http: HttpClient) { }

  getStreamingData(title: string, country: string): Observable<StreamingData>{
    return this.http.get<StreamingData>(environment.streamingInfoApiBaseUrl, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.
        RapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.
        XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('title', title)
      .set('country', country)
      .set('mode', 'json')
    })
  }
}

export class CountryService {
  private countries = environment.countries;

  getCountries() {
    return this.countries;
  }
}
