import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TableUsdResponse} from './model/table-usd-response';
import {PageEvent} from '@angular/material/paginator';
import {TableUsd} from './model/table-usd';

@Component({
  selector: 'app-table-usd',
  templateUrl: './table-usd.component.html',
  styleUrls: ['./table-usd.component.scss'],
})
export class TableUsdComponent implements OnInit {
  public tables: TableUsd[];
  public pageSlice: any;
  displayedColumns: string[] = ['id', 'rate', 'price', 'prevPrice', 'change'];

  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
    //Get Today Prices
    this.getPricesUsd().subscribe(responseUsd => {
      //Get Yesterday Prices
      this.getLastUsdPrices().subscribe(responseUsdPrev => {
        const objPrev = responseUsdPrev.rates;
        const obj = responseUsd.rates;

        const rate = Object.keys(obj);
        const price = Object.values(obj);
        const prevPrice = Object.values(objPrev);

        let ids = Array.from(Array(32).keys());

        // Create the object array

        let CreateArray = ids.map((id, index) => {
          return {
            id: id,
            rate: rate[index],
            price: price[index],
            prevPrice: prevPrice[index],
          };
        });

        CreateArray.shift();
        CreateArray.shift();
        this.tables = CreateArray;
        this.pageSlice = CreateArray.slice(0, 8);
      });
    });
  }

  public getPricesUsd() {
    return this.HttpClient.get<TableUsdResponse>('https://api.vatcomply.com/rates?base=USD');
  }

  public getLastUsdPrices() {
    function isSunday(date = new Date()) {
      return date.getDay() === 0;
    }

    function isMonday(date = new Date()) {
      return date.getDay() === 1;
    }

    const lastDayDate = new Date();

    if (isSunday(lastDayDate) === true) {
      lastDayDate.setDate(lastDayDate.getDate() - 3);
    } else if (isMonday(lastDayDate) === true) {
      lastDayDate.setDate(lastDayDate.getDate() - 4);
    } else {
      lastDayDate.setDate(lastDayDate.getDate() - 2);
    }

    const formatDate = lastDayDate.toISOString().slice(0, 10);
    return this.HttpClient.get<TableUsdResponse>(` https://api.vatcomply.com/rates?date=${formatDate}&base=USD`);
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.tables.length) {
      endIndex = this.tables.length;
    }
    this.pageSlice = this.tables.slice(startIndex, endIndex);
  }
}
