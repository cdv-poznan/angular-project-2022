import {Component, OnInit} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  deleteDoc,
  doc,
  DocumentData,
  Firestore,
  QueryDocumentSnapshot,
  updateDoc,
} from '@angular/fire/firestore';

interface Task {
  id?: string;
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

    collectionData(this.remindersCollection, {idField: 'id'}).subscribe(data => {
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

  updateTask(task: Task, done: boolean) {
    const ref = doc(this.firestore, `reminders/${task.id}`);
    updateDoc(ref, {done});
  }

  deleteTask(task: Task) {
    const ref = doc(this.firestore, `reminders/${task.id}`);
    deleteDoc(ref);
  }
}