import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Router } from '@angular/router';
import { UiService } from 'src/app/services/uiservice.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  condition: string;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
  darkMode: boolean;

  constructor(public weather: WeatherService,
              public router: Router,
              public ui: UiService) {
  }

  ngOnInit() {
    this.ui.darkModeState.subscribe((isDark) => {
      this.darkMode = isDark;
    });

    this.weather.getWeatherState('Paris')
      .subscribe((data: string) => {
        this.condition = data;
      });

    this.weather.getCurrentTemp('Paris').subscribe((data: number) => {
      this.currentTemp = data;
    });
    this.weather.getMinTemp('Paris').subscribe((data: number) => {
      this.minTemp = data;
    });
    this.weather.getMaxTemp('Paris').subscribe((data: number) => {
      this.maxTemp = data;
    });
  }

  ngOnDestroy() {

  }

  openDetails() {
    this.router.navigateByUrl('/details/paris');
  }

}
