import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
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
  snackbar: any;

  constructor(private httpClient: HttpClient, private matSnackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.httpClient.get<ColorResponse>('https://reqres.in/api/colors').subscribe((response: ColorResponse) => {
      this.colors = response.data; //odwołanie do tego jaką odpowiedź daje colors
    });
  }

  onCopiedToClipboard() {
    this.matSnackBar.open('Color copied to clipboard!', 'Close', {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 3000,
    });
  }
}
