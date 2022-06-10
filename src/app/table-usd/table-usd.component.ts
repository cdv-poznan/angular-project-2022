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
  displayedColumns: string[] = ['id', 'rate', 'price'];

  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
    this.getPricesUsd().subscribe(responseUsd => {
      const obj = responseUsd.rates;

      const rate = Object.keys(obj);
      const price = Object.values(obj);

      let ids = Array.from(Array(32).keys());

      // Create the object array

      let CreateArray = ids.map((id, index) => {
        return {
          id: id,
          rate: rate[index],
          price: price[index],
        };
      });

      CreateArray.shift()
      CreateArray.shift()

      this.tables = CreateArray;

      this.pageSlice = CreateArray.slice(0, 8);
    });
  }

  public getPricesUsd() {
    return this.HttpClient.get<TableUsdResponse>('https://api.vatcomply.com/rates?base=USD');
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
