import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.css']
})
export class RepeaterComponent implements OnInit {

  constructor() { }

  @Input()
  public option;

  ngOnInit(): void {
  }

}
