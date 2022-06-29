import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ColorsResponse} from './model/colors-response';
import {Color} from './model/color';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements OnInit {
  colors: Color[];
  total: number = 0;
  perPage: number = 0;

  constructor(private httpClient: HttpClient, private matsnackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getColors(1);
  }

  getColors(page: number) {
    this.httpClient
      .get<ColorsResponse>('https://reqres.in/api/colors', {
        params: {page},
      })
      .subscribe((response: ColorsResponse) => {
        this.colors = response.data;
        this.total = response.total;
        this.perPage = response.per_page;
      });
  }

  onCopiedToClipboard() {
    this.matsnackBar.open('Color has been copied to clipboard', 'Close', {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 2000,
    });
  }
  onPageChange(event: PageEvent) {
    const nextPage = event.pageIndex + 1;
    this.getColors(nextPage);
  }


}
