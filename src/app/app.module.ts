import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { WeatherInfoListComponent } from './weather-info-list/weather-info-list.component';
import { DataService } from 'src/shared/service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { WeatherInfoCardComponent } from './weather-info-card/weather-info-card.component';

@NgModule({
  declarations: [
    AppComponent, 
    SearchInputComponent, 
    WeatherInfoListComponent, 
    WeatherInfoCardComponent, 
    WeatherInfoComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MatIconModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
