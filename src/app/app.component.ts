import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Find Your Movie';
  constructor(public router: Router) {}

  movetoSearchMoviePage() {
    this.router.navigate(['/search-movie']);
  }
  movieSearch() {}
}
