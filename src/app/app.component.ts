import { Component } from '@angular/core';

import '../assets/scss/styles.scss';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
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