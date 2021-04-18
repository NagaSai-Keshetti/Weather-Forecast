import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wf-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss'],
})
export class DirectionComponent implements OnInit {
  @Input() angle: number = 0;
  styles: string;

  constructor() { }

  ngOnInit() {
    const angleCorrection = -50;
    this.angle = this.angle + angleCorrection;
    this.styles = `transform: rotate(${this.angle}deg);`
  }

}
