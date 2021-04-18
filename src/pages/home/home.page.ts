import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cities = [2759794, 3067696, 2800866, 2968815, 6453366]

  constructor() { }

  ngOnInit() {
  }

}
