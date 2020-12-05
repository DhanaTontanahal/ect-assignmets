import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ans';
  public data = [{name:'A'} ,  {name:'B'} ,{ name:'C'}]
}
