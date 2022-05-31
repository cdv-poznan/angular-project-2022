import {Component, OnInit} from '@angular/core';
import {collection, collectionData, DocumentData, Firestore, QueryDocumentSnapshot} from '@angular/fire/firestore';
import { addDoc, CollectionReference, doc } from '@firebase/firestore';

interface Task {
  id: number;
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
  text: string = "";
  remindersCollection: CollectionReference;
  constructor(public firestore: Firestore) {}

  ngOnInit(): void {
    const remindersCollection = collection(this.firestore, 'reminders').withConverter({
      toFirestore(task: Task): DocumentData {
        return task as DocumentData;
      },
      fromFirestore(snapshot: QueryDocumentSnapshot): Task {
        return snapshot.data() as Task;
      },
    });

    collectionData(remindersCollection {id field="id"}).subscribe(data => {
      this.tasks = data;
    });
    addTask() {
      const task: Task = {
      text: this.text,
      done: false,
      created: Date.now(),
    };
    
    addDoc(this.remindersCollection, task) {
      this.tasks = '';
    }
    updateTask(task: Task, done: Boolean) {
      doc(this.firestore, `reminders/${task.id}`);
    }
  }
}

function addTask() {
  throw new Error('Function not implemented.');
}
