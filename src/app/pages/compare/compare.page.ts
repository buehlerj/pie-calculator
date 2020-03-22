import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.page.html',
  styleUrls: ['./compare.page.scss'],
})
export class ComparePage implements OnInit {

  zasToCompare: any[];

  constructor() {
  }

  ngOnInit() {
    this.resetZasToCompare();

    this.zasToCompare.forEach((_za, index) => {
      this.adjustCalculations(index);
    });
  }

  public resetZasToCompare() {
    this.zasToCompare = [
      { pieAmeter: 8, price: 12, sliceCount: 8 },
      { pieAmeter: 12, price: 14, sliceCount: 8 },
      { pieAmeter: 14, price: 18, sliceCount: 8 },
      { pieAmeter: 16, price: 21, sliceCount: 8 },
      { pieAmeter: 22, price: 25, sliceCount: 8 }
    ];
  }

  public adjustCalculations(zaIndex: number) {
    const pieArea = Math.PI * Math.pow(this.zasToCompare[zaIndex].pieAmeter / 2, 2);
    this.zasToCompare[zaIndex].area = pieArea;
    this.zasToCompare[zaIndex].pricePerIn = pieArea / this.zasToCompare[zaIndex].price;
    this.zasToCompare[zaIndex].inchesPerDollar = this.zasToCompare[zaIndex].price / pieArea;

    if (this.zasToCompare[zaIndex].sliceCount) {
      this.zasToCompare[zaIndex].areaPerSlice = pieArea / this.zasToCompare[zaIndex].sliceCount;
      this.zasToCompare[zaIndex].dollarsPerSlice = this.zasToCompare[zaIndex].price / this.zasToCompare[zaIndex].sliceCount;
    }
  }

  public addNewComparisonZa() {
    this.zasToCompare.push({ pieAmeter: 8, price: 12, sliceCount: 8 });
    this.adjustCalculations(this.zasToCompare.length - 1);
  }

  public removeComparisonZa(index: number) {
    this.zasToCompare[index].hideItem = true;
    setTimeout(() => {
      this.zasToCompare.splice(index, 1);
    }, 300);
  }
}
