import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IWeatherInfo } from "src/shared/interfaces";
import { DataService } from 'src/shared/service';

@Component({
  selector: "weather-info",
  template: `
    <li class="weekInfo__day" (click)="emitSelectDay()" [ngClass]="{'selected': checkIfSelected()}">
      <span>{{weatherInfo?.day.name}}</span>
      <div class="weekInfo__day__img">
        <img src="https://www.metaweather.com/static/img/weather/{{weatherInfo?.weatherStateAbbr}}.svg" alt="" />
      </div>
    </li>
  `,
  styleUrls: ["./weathe-info.component.css"]
})

export class WeatherInfoComponent implements OnInit {
  @Input() woeid: any;
  @Input() day: any;
  @Input() selectedDay: IWeatherInfo | undefined;
  @Output() selectDay = new EventEmitter();  
  weatherInfo: IWeatherInfo | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getWeatherData();
  }

  checkIfSelected() {
    return this.selectedDay && this.selectedDay === this.weatherInfo;
  }

  emitSelectDay() {
    this.selectDay.emit(this.weatherInfo);
  }

  getWeatherData() {
    if(this.woeid) {      
      this.dataService.getWeatherInfo(this.woeid, this.day.formattedDate).subscribe((data: any) => {        
        if(this.dataService.validateResponse(data)) {

          this.weatherInfo = {
            day: this.day,
            weatherStateName: data[0].weather_state_name,
            weatherStateAbbr: data[0].weather_state_abbr
          } 
          
          if(this.day.id === 0) {
            this.emitSelectDay();
          }
        }           
      });      
    }         
  }
 
}