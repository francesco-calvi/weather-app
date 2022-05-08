import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ILocation, IWeatherInfo } from 'src/shared/interfaces';

@Component({
  selector: "weather-info-card",
  templateUrl: "./weather-info-card.component.html",
  styleUrls: ["./weather-info-card.component.css"],
})

export class WeatherInfoCardComponent {
  @Input() location!: ILocation;   
  @Input() week!: [];
  @Output() delete = new EventEmitter();

  selectedDay: IWeatherInfo | undefined;

  updateSelectedDay(value: IWeatherInfo) {    
    this.selectedDay = value;
  }

  emitDelete() {
    this.delete.emit(this.location);
  }
  
}