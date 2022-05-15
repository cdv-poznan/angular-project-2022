import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Color} from './model/color';
import {ColorsResponse} from './model/colors-response';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements OnInit {
  colors: Color[];
  constructor(private httpClient: HttpClient, private matSnackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.httpClient.get<ColorsResponse>('https://reqres.in/api/colors').subscribe((response: ColorsResponse) => {
      this.colors = response.data;
    });
  }

  OnCopiedToClipboard() {
    this.matSnackBar.open('Color has been copied to clipboard', 'Close', {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 2000,
    })
  }
}
