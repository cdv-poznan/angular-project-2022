import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Table } from './model/table';
import { TableResponse } from './model/table-response';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
 public prices: Table ;


  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
    this.getPrices().subscribe(response => {
      this.prices = response.rates;
      console.log(response)
    })
  }

 public getPrices(){
   return this.HttpClient.get<TableResponse>('https://api.vatcomply.com/rates')
 }

}



// 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json'