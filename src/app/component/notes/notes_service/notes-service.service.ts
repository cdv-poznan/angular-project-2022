import { Injectable } from '@angular/core';
import { Notes } from '../notes';
@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  storageKey = 'savedNotes';

  public saveNotes(notes: Notes[]): void {
    const savedNotes: string =
      JSON.stringify(notes);

    localStorage.setItem(
      this.storageKey,
      savedNotes,
    );
  }

  public getNotes(): Notes[] {
    const savedNotes = localStorage.getItem(
      this.storageKey,
    );
    if (savedNotes === null) {
      return [];
    }
    const notesObjects: Notes[] = JSON.parse(savedNotes)
    return notesObjects;
  }

  // constructor() { }
}
