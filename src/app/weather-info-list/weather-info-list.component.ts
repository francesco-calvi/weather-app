import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ILocation } from 'src/shared/interfaces';
import { getWeek } from 'src/shared/utils';

@Component({
  selector: "weather-info-list",
  template: `
    <weather-info-card 
      *ngFor="let location of data" 
      class="card" 
      [ngClass]="{'margin-right' : checkDataLength()}"
      [location]="location" 
      [week]="week" 
      (delete)="emitDeleteLocation($event)">
    </weather-info-card>  
  `,
  styleUrls: ["./weather-info-list.component.css"],
})

export class WeatherInfoListComponent implements OnInit {
  @Input() data: ILocation[] | undefined; 
  @Output() deleteLocation = new EventEmitter();
  week: any;

  ngOnInit(): void {    
    this.week = getWeek();    
  }

  // toggle the class 'margin-right'
  checkDataLength() {
    return this.data ? this.data.length < 3 : false;
  };
  
  emitDeleteLocation(value: ILocation) {
    this.deleteLocation.emit(value);
  } 
  
}