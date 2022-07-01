import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Notes } from '../notes';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() public noteInput: Notes; 
  @Output() public delete =
  new EventEmitter<Notes>();

  public NotesDeleteClick() {
    this.delete.emit(this.noteInput);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
