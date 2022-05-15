import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Project 2022';

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
        this.translateService.use('pl');
  }
changeLanguage(){
  if( this.translateService.currentLang === 'pl') {

    this.translateService.use('en');
  } else {
    this.translateService.use('pl');
  }
}
}
