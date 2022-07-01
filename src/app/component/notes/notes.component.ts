import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from './notes_service/notes-service.service';
import { Notes } from './notes';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  public notes: Notes[] = [];
  public text: string = '';

  displayValNote: string ='';
  getValueNote(val: string){
    console.log(val)
    this.displayValNote=val
  }

  public addNotes() {
    const note: Notes = {
      text: this.text,
    };
    this.notes.push(note);

    this.NotesServiceService.saveNotes(this.notes);
  }

  public deleteNotes(note: Notes) {
    const index = this.notes.indexOf(note);
    this.notes.splice(index, 1);

    this.NotesServiceService.saveNotes(this.notes);
  }

  constructor(private NotesServiceService: NotesServiceService,) { 
  }

  ngOnInit(): void {
    this.notes = this.NotesServiceService.getNotes();
}}