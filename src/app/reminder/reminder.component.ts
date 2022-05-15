import {Component, OnInit} from '@angular/core';
import {collectionData, Firestore} from '@angular/fire/firestore';
import {collection, DocumentData, QueryDocumentSnapshot} from '@firebase/firestore';

interface Task {
  text: string;
  created: number;
  done: boolean;
}

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss'],
})
export class ReminderComponent implements OnInit {
  tasks: Task[];

  constructor(public firestore: Firestore) {}

  ngOnInit(): void {
    //referencja że chcemy pobrać dane z bazy danych - z kolekcji
    const remindersCollection = collection(this.firestore, 'reminders').withConverter({
      toFirestore(task: Task): DocumentData {
        return task as DocumentData;
      },
      fromFirestore(snapshot: QueryDocumentSnapshot): Task {
        return snapshot.data() as Task;
      },
    });
    collectionData(remindersCollection).subscribe(data => {
      this.tasks = data;
    });
  }
}
