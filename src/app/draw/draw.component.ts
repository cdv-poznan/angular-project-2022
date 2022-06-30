import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {
  @ViewChild('canvas', {static: false}) canvas: ElementRef;

constructor(){}

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    let canvas = <HTMLCanvasElement> document.getElementById('canvas');
    canvas.width = window.innerWidth - window.innerWidth/3;
    canvas.height = window.innerHeight - window.innerHeight/2;
    
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0,0 , canvas.width, canvas.height);
    
    let start_background_color = "white";
    let draw_color = start_background_color;
    let draw_width = 2;
    let is_drawing = false;
    

    canvas.addEventListener("touchstart", start, false);
    canvas.addEventListener("touchmove", draw, false);
    canvas.addEventListener("mousedown", start, false);
    canvas.addEventListener("mousemove", draw, false);

    canvas.addEventListener("touchend", stop, false);
    canvas.addEventListener("mouseup", stop, false);
    canvas.addEventListener("mouseout", stop, false);

    function start(event: any){
      is_drawing = true;
      ctx.beginPath();
      ctx.moveTo(event.clientX - canvas.offsetLeft,
                     event.clientY - canvas.offsetTop);
      event.preventDefault();
    }
    
    function draw(event: any){
      if(is_drawing == true){
        ctx.lineTo(event.clientX - canvas.offsetLeft,
                       event.clientY - canvas.offsetTop);
        event.strokeStyle = draw_color;
        ctx.lineWidth = draw_width;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      }
      event.preventDefault();
    }

    function stop(event: any){
      if(is_drawing){
        ctx.stroke();
        ctx.closePath();
        is_drawing = false;
      }
      event.preventDefault();
    }
    
  }
  
  


  imgLink() {
    let canvas = <HTMLCanvasElement> document.getElementById('canvas');
    const link = canvas.toDataURL("image/png");
    return link;
  }
 

}

