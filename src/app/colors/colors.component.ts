import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColorResponse } from './model/color-response';
import { Color } from './model/color';
@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
colors: Color [];
constructor(private httpClient: HttpClient) {}


  ngOnInit(): void {
    this.httpClient.get<ColorResponse>('https://reqres.in/api/colors')
    .subscribe((response: ColorResponse) =>{
      this.colors = response.data;
    });
  }

}
