import {Component} from '@angular/core';
import {Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Project 2022';

  constructor(private translateService: TranslateService,
    public auth: Auth) {}

  ngOnInit() {
    this.translateService.use('pl');
    
  }

  changeLanguage(){
    if(this.translateService.currentLang === 'pl'){
      this.translateService.use('en')
    }else {
      this.translateService.use('pl')
    }
   
   

  }

  signInWithGoogle(){
    signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  signOut(){
    this.auth.signOut();
  }

}


