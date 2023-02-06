import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
})
export class CheckComponent implements OnInit {
  data = [
    {
      name: 'primary',
      selected: false,
    },
    {
      name: 'secondary',
      selected: true,
    },
    {
      name: 'tertiary',
      selected: true,
    },
    {
      name: 'success',
      selected: false,
    },
    {
      name: 'warning',
      selected: true,
    },
    {
      name: 'danger',
      selected: false,
    },
    {
      name: 'light',
      selected: true,
    },
    {
      name: 'medium',
      selected: false,
    },
    {
      name: 'dark',
      selected: true,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
