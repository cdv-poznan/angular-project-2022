import {Component, OnInit} from '@angular/core';
import {collection, collectionData, DocumentData, Firestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss'],
})
export class ReminderComponent implements OnInit {
  tasks: DocumentData[];

  constructor(public firestore: Firestore) {}

  ngOnInit(): void {
    const remindersCollection = collection(this.firestore, 'reminders');

    collectionData(remindersCollection).subscribe(data => {
      this.tasks = data;
    });
  }
}
