import { Component } from '@angular/core';

import '../assets/css/styles.css';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template:`
    <div class='app container'>
      <h1>{{title}}</h1>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title: string;
  constructor(){
    this.title = 'Intro';
  }
}