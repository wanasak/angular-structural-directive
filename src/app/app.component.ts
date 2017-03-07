import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent { 
  name = 'Angular'; 
  hero = { name: 'Superman' };
  heroes = [
    { name: 'Batman', emotion: 'sad' },
    { name: 'Superman', emotion: 'happy' },
    { name: 'Spiderman', emotion: 'sad' }
  ];
}
