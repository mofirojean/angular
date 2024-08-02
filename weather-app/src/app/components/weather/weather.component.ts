import { Component } from '@angular/core';
import { Weather } from '../../model/weather';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  weather?: Weather;

  constructor(private weatherService: WeatherService) {}

  search(city: string) {
    this.weatherService.getWeather(city).subscribe((weather: Weather) => {
      this.weather = weather;
    });
  }
}
