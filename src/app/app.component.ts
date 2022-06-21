import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Project 2022';
  
  toQuotes(){
    document.getElementById("quotes").scrollIntoView({behavior: "smooth"});
  }
  toAbout(){
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
  }
}

