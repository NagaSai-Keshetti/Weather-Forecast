import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'feature-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
})
export class CityListComponent implements OnInit {
  @Input() cityIdList: number[];

  constructor() { }

  ngOnInit() { }


}
