import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ColorsResponse} from './model/colors-response';
import {Color} from './model/color';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements OnInit {
  colors: Color[];
  constructor(
    private httpClient: HttpClient,
     private matsnackBar: MatSnackBar,
     ) {}

  ngOnInit(): void {
    this.httpClient.get<ColorsResponse>('https://reqres.in/api/colors').subscribe((response: ColorsResponse) => {
      this.colors = response.data;
    });
  }

  onCopiedToClipboard() {
    this.matsnackBar.open('Color has been copied to clipboard', 'Close', {
      verticalPosition:'top',
      horizontalPosition:'right',
      duration: 2000,
    });
  }
}
