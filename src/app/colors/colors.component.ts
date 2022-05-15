import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColorResponse } from './model/color-response'
import { Color } from './model/color'
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
  colors: Color[];
  snackbar: any;
  total: number = 0;
  perPage: number = 0;

  constructor(private httpClient: HttpClient, private matSnackBar:MatSnackBar,) { }
  
  ngOnInit(): void {
    this.getColors(1);
  }
  
  getColors(page: number){
    this.httpClient.get<ColorResponse>('https://reqres.in/api/colors',
    {params: {page}})
    .subscribe((response: ColorResponse) => {
        this.colors = response.data;
        this.total = response.total;
        this.perPage = response.per_page;
    });
  }

  onCopiedToClipboard(){
    this.matSnackBar.open('Color has been copied to clipoard', 'Close', {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 2000,
    });
  }

  onPageChange(event: PageEvent){
    const nextPage = event.pageIndex + 1;
    this.getColors(nextPage);
  }

}
