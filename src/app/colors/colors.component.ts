import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Color} from './model/color';
import {ColorResponse} from './model/color-response';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements OnInit {
  // tutaj deklaracja jakiego typu modelem jest colors (tablica Color)
  colors: Color[];
  // snackbar: any;
  total: number = 0;
  perPage: number = 0;

  constructor(private httpClient: HttpClient, private matSnackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getColors(1);
  }

  getColors(page: number) {
    this.httpClient.get<ColorResponse>('https://reqres.in/api/colors', {params: {page}}).subscribe((response: ColorResponse) => {
      this.colors = response.data; //odwołanie do tego jaką odpowiedź daje colors
      this.total = response.total;
      this.perPage = response.per_page;
    });
  }

  onCopiedToClipboard() {
    this.matSnackBar.open('Color copied to clipboard!', 'Close', {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 3000,
    });
  }
  onPageChange(event: PageEvent) {
    const nextPage = event.pageIndex + 1;
    // console.log(event);
  }
}
