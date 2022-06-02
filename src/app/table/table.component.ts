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
 public tables: Table[]  = [];


  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
    this.getPrices().subscribe(response => {
      this.tables = response.rates as []
      console.log(response)
    })
    
  }

 public getPrices(){
   return this.HttpClient.get<TableResponse>('https://api.vatcomply.com/rates')
 }

}


