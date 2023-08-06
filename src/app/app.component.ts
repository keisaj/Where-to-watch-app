import { Component, OnInit } from '@angular/core';
import { CountryService, StreamingInfoService } from './services/streaming-info.service';
import { CountryCode, StreamingData } from './models/streamingInfo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = "The Witcher";
  foundTitle?: string;
  foundCountry?: string = "Poland"
  countryCode: string = 'pl';
  countries: any[] = [];

  constructor(private streamingInfoService: StreamingInfoService, 
    private countryService: CountryService) {

  }
  

  streamingData?: StreamingData;
  services?: Array<CountryCode>

  ngOnInit(): void {
    this.getStreamingData(this.title, this.countryCode);
    this.countries = this.countryService.getCountries();
    this.title = '';
  }
  onSubmit() {
    this.getStreamingData(this.title, this.countryCode);
    this.title = '';

  }

  onSelectCountry(event: any) {
    this.countryCode = event.target.value;
    this.foundCountry = event.target.value;
  }

  private getStreamingData(title: string, countryCode: string) {
    this.streamingInfoService.getStreamingData(title, countryCode)
      .subscribe({
        next: (response) => {
          this.streamingData = response;
          this.services = this.streamingData.result[0].streamingInfo[this.countryCode]
          this.foundTitle = this.streamingData.result[0].title
          console.log(response);

        }
      })
  }

  isServiceAvailable(serviceName: string): boolean {
    return this.services?.some(service => service.service === serviceName) ?? false;
  }
}
