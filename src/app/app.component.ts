import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})



export class AppComponent {
  TextQuery:string='Zielona';
  
  onClick(TextQuery:string) {
    document.getElementById("logo").style.display = "flex";
    document.getElementById("logo").style.marginLeft = "20px";
    document.getElementById("logo").style.marginRight = "0px";
    document.getElementById("logo").style.marginTop = "20px";
    document.getElementById("logo").style.height = "100px";
    document.getElementById("logo").style.position = "absolute";
    document.getElementById("Search").style.margin = "25px 135px 50px 135px";
    document.getElementById("div_to_search").style.padding = "20px 20px 0px 150px";
    console.log(this.TextQuery);
    
  }
}
