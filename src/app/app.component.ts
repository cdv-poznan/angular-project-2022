import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Project 2022';
  mousePos: any;
  @HostListener('mousedown', ['$event']) onMouseDown(event: any) {
    this.mousePos = {x: event.clientX, y: event.clientY};
  }
}
