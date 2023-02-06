import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss'],
})
export class DateTimeComponent implements OnInit {
  dataNasc: Date = new Date();
  constructor() {}

  ngOnInit() {}
  cambioFecha(event) {
    console.log('ionChage', event);
    console.log('Date', new Date(event.datail.value));
  }
}
