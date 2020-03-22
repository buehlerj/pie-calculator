import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-calculator',
  templateUrl: './quick-calculator.page.html',
  styleUrls: ['./quick-calculator.page.scss'],
})
export class QuickCalculatorPage implements OnInit {
  pieAmeter: number;
  price: number;
  sliceCount: number;

  zaSpecs: any;

  constructor() {
    this.pieAmeter = 12;
    this.price = 15;
    this.sliceCount = 8;
  }

  ngOnInit() {
    this.calculateZaSpecs();
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
