import { Component, OnInit } from '@angular/core';


interface Result {
  profit: number;
  loss: number;
  reqDep: number;
}

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})



export class CalculatorComponent implements OnInit {
results: Result[] = [];
public price: number;
public quantity: number;
public takeProfit: number;
public stopLoss: number;
public laverage: number;



  constructor() { }



 public getValue(){
   let laverage = Number(this.laverage)
   let profit = (this.quantity * this.takeProfit) - (this.quantity * this.price)
   let loss = (this.quantity * this.stopLoss) - (this.quantity * this.price)
   let worth = this.price * this.quantity
   let requiredDeposit = worth/laverage
   console.log(profit, loss, requiredDeposit)

   const result: Result = {
    profit: profit,
    loss: loss,
    reqDep: requiredDeposit,

  }
  console.log(result)
  this.results.push(result)
 
 }



  ngOnInit(): void {
  }

}
