import {isPlatformBrowser} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {faArrowDown91} from '@fortawesome/free-solid-svg-icons';
import {Table} from './model/table';
import {TableResponse} from './model/table-response';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public tables: Table[];
  public pageSlice: any;
  displayedColumns: string[] = ['id', 'rate', 'price', 'prevPrice', 'change'];

  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
    //Get Today Prices
    this.getPrices().subscribe(response => {
      //Get Yesterday Prices
      this.getLastPrices().subscribe(responsePrev => {
        const objPrev = responsePrev.rates;
        const obj = response.rates;

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
        this.tables = CreateArray;
        // console.log(this.tables);
        this.pageSlice = CreateArray.slice(0, 8);
      });
    });
  }

  public getPrices() {
    return this.HttpClient.get<TableResponse>('https://api.vatcomply.com/rates');
  }

  public getLastPrices() {
    function isSunday(date = new Date()) {
      return date.getDay() === 0;
    }

    function isMonday(date = new Date()) {
      return date.getDay() === 1;
    }

    const today = new Date();
    const lastDayDate = new Date();

    if (isSunday(today) === true) {
      lastDayDate.setDate(lastDayDate.getDate() - 3);
    } else if (isMonday(today) === true) {
      lastDayDate.setDate(lastDayDate.getDate() - 4);
    } else {
      lastDayDate.setDate(lastDayDate.getDate() - 2);
    }

    const formatDate = lastDayDate.toISOString().slice(0, 10);
    console.log(today);
    console.log(lastDayDate);
    console.log(formatDate);
    return this.HttpClient.get<TableResponse>(`https://api.vatcomply.com/rates?date=${formatDate}`);
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
