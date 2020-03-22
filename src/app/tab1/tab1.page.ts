import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  pieAmeter: number;
  price: number;
  sliceCount: number;

  zaSpecs: any;

  constructor() {
    this.pieAmeter = 12;
    this.price = 15;
    this.sliceCount = 8;
    this.calculateZaSpecs();
  }

  printPieWidth() {
    console.log(this.pieAmeter);
  }

  calculateZaSpecs() {
    const pieArea = Math.PI * Math.pow(this.pieAmeter / 2, 2);
    this.zaSpecs = {
      area: pieArea,
      pricePerIn: this.price / pieArea,
      inchesPerDollar: pieArea / this.price
    };

    if (this.sliceCount) {
      this.zaSpecs.areaPerSlice = pieArea / this.sliceCount;
      this.zaSpecs.dollarsPerSlice = this.price / this.sliceCount;
    }
  }
}
