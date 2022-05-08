import { Component } from '@angular/core';
import { ILocation } from 'src/shared/interfaces';
import { DataService } from 'src/shared/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {  
  title = "weather-app";  

  constructor(private dataService: DataService) {}

  data: ILocation[] = [];  
  
  search(value: string) {
    // check if location exists in data
    let exists = this.data.find((location) => location.title.toLowerCase() === value);
    if(!exists) {
      // call api
      this.searchLocation(value.toLowerCase());
    }
  } 

  searchLocation(inputValue: string) {
    this.dataService.searchLocation(inputValue).subscribe((data: any)=> {

      if(this.dataService.validateResponse(data)) {
        const location: ILocation = {
          title: data[0].title,
          woeid: data[0].woeid
        }
        this.data.push(location);
      }

    }); 
  }   

  deleteLocation(value: ILocation) {
    this.data = this.data.filter((location) => location.woeid !== value.woeid);
  }

  // toggle the class 'space-between'
  checkDataLength() {
    return this.data.length > 2;
  };

}