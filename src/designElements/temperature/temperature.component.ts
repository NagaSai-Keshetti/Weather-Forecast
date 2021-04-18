import { Component, Input, OnInit } from '@angular/core';
import { Units } from 'src/shared';

@Component({
  selector: 'wf-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent implements OnInit {
  @Input() value: number;
  @Input() unit: Units = Units.metric;
  defaultUnits = Units;
  constructor() { }

  ngOnInit() { }

}
