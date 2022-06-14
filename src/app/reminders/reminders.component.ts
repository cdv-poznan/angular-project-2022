import {Component, OnInit} from '@angular/core';
import {collection, collectionData, DocumentData, Firestore, QueryDocumentSnapshot} from '@angular/fire/firestore';
import { addDoc, CollectionReference } from '@firebase/firestore';

interface Task {
  text: string;
  created: number;
  done: boolean;
}

@Component({
  selector: 'app-reminder',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss'],
})
export class RemindersComponent implements OnInit {
  tasks: Task[];
  text: string = '';
  remindersCollection: CollectionReference<Task>;

  constructor(public firestore: Firestore) {}

  ngOnInit(): void {
    this.remindersCollection = collection(this.firestore, 'reminders').withConverter({
      toFirestore(task: Task): DocumentData {
        return task as DocumentData;
      },
      fromFirestore(snapshot: QueryDocumentSnapshot): Task {
        return snapshot.data() as Task;
      },
    });
    collectionData(this.remindersCollection).subscribe(data => {
      this.tasks = data;
    });
  }
  addTask() {
    const task: Task = {
      text: this.text,
      done: false,
      created: Date.now(),
    };
    addDoc(this.remindersCollection, task);
    this.text = '';
  }
}