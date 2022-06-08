import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Table} from './model/table';
import {TableResponse} from './model/table-response';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public tables: Table[]
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

      // console.log(CreateArray);
      this.tables = CreateArray;
      console.log(this.tables)
    });
  }

 

  public getPrices() {
    return this.HttpClient.get<TableResponse>('https://api.vatcomply.com/rates');
  }
}
