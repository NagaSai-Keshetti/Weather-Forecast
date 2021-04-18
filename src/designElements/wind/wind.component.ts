import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wf-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.scss'],
})
export class WindComponent implements OnInit {
  @Input() speed: number;
  @Input() angle: number;

  constructor() { }

  ngOnInit() { }

}
