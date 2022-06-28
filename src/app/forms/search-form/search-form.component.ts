import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  @Output() newMovieTitleEvent = new EventEmitter<string>();

  form = new FormGroup({
    movieTitle: new FormControl('', Validators.required),
  });

  onSubmit() {
    // console.log(this.form);
  }

  addMovieTitle(value: string) {
    this.newMovieTitleEvent.emit(value);
  }
}
