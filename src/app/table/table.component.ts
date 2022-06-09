import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
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
  displayedColumns: string[] = ['id', 'rate', 'price'];

  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
    this.getPrices().subscribe(response => {
      const obj = response.rates;

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

      CreateArray.shift();
      this.tables = CreateArray;

      this.pageSlice = CreateArray.slice(0, 8);
    });
  }

  public getPrices() {
    return this.HttpClient.get<TableResponse>('https://api.vatcomply.com/rates');
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
