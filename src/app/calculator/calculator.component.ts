import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
public price: number;
public quantity: number;
public profit: number;
public stop: number;
public laverage: number;

  constructor() { }

 public getValue(){
   let laverage = Number(this.laverage)
   console.log(this.price, this.quantity, laverage, this.profit, this.stop)
 }

  ngOnInit(): void {
  }

}
