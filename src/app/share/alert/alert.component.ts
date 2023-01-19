import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit{
  @Input() type: string;
  cssClass: string[] = ['alert', 'alert-dismissible', 'fade'];

  constructor() { }

  ngOnInit(): void {
    const alertTypeClass = {
      success: 'alert-success',
      danger: 'alert-danger',
      info: 'alert-info',
      warning: 'alert-warning'
    };
    this.cssClass.push(alertTypeClass[this.type]);
  }

  removeAlert() {
    this.cssClass = ['alert-hide'];
  }
}
