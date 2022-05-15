import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Color} from './model/color';
import {ColorRespons} from './model/color-respons';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements OnInit {
  color: Color[];

  constructor(private httpClient: HttpClient, private matSnackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.httpClient.get<ColorRespons>('https://reqres.in/api/colors').subscribe((response: ColorRespons) => {
      this.color = response.data;
    });
  }

  onCopiedToClipboard() {
    this.matSnackBar.open('Color has been copied to clipboard', 'Close', {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 2000,
    });
  }
}