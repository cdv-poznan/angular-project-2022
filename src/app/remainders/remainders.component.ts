import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore, DocumentData, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

interface Task {
  text: string;
  created: number;
  done: boolean;
}

@Component({
  selector: 'app-remainders',
  templateUrl: './remainders.component.html',
  styleUrls: ['./remainders.component.scss']
})
export class RemaindersComponent implements OnInit {
  tasks: Task[];

  constructor(public firestore: Firestore) { }

  ngOnInit(): void {
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
