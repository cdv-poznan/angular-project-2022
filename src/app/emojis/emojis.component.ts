import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Emoji} from './model/emoji';
import {RenderedEmoji} from './model/rendered-emojis';
import {PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-emojis',
  templateUrl: './emojis.component.html',
  styleUrls: ['./emojis.component.scss'],
})
export class EmojisComponent implements OnInit {
  // emojis = EMOJIS
  emojis: RenderedEmoji[];
  newEmojis: string[];
  id: number = 0;
  character: string;
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEmojis(this.id);
  }

  emojiList = `https://emoji-api.com/emojis?access_key=b2d5f5b8a462e384858bbfeaf3f0bf1b84fcd82e`;
  getEmojis(id:number) {
    this.http.get<RenderedEmoji[]>(this.emojiList).subscribe((response: RenderedEmoji[]) => {
      this.emojis = [];
      for (let i = id; i < id + 10; i++) {
        this.emojis.push(response[i]);
      }
      console.log(this.emojis);
    });
  }
  copyEmoji(event?: MouseEvent | TouchEvent) {
    (event.target as HTMLElement).textContent
  }
  onPageChange(event: PageEvent) {
    const nextPage = event.pageIndex + 20;
    this.getEmojis(nextPage);
  }

  copyAndPasteEmoji() {
  let canvas = <HTMLCanvasElement> document.getElementById('canvas');
    let ctx = canvas.getContext("2d");
    ctx.font = "12vh verdana";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        canvas.addEventListener(
          "click",
          (e) => {
            var mousePos = getMousePos(canvas, e);
            ctx.fillText(this.character, mousePos.x, mousePos.y);
          },
          { once: true }
        );
        canvas.addEventListener(
          "touchstart",
          (e) => {
            var mousePos = getMousePos(canvas, e);
            ctx.fillText(this.character, mousePos.x, mousePos.y);
          },
          { once: true }
        );
  }


}
