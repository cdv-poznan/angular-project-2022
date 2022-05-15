import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, DocumentData } from '@firebase/firestore';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  tasks: DocumentData[];

  constructor(public firestore:Firestore) { }

  ngOnInit(): void {
    const remindersCollection = collection(this.firestore, 'reminders');

    collectionData(remindersCollection).subscribe(data => {
      this.tasks = data;
    });
  }

}
