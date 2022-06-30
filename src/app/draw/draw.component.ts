import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {
  @ViewChild('canvas', {static: false}) canvas: ElementRef;



  ngOnInit(): void {
  }
  ngAfterViewInit(){
    let canvas = <HTMLCanvasElement> document.getElementById('canvas');
    canvas.width = window.innerWidth - 60;
    canvas.height = 400;
 
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
  clearCanvas(){
    let canvas = <HTMLCanvasElement> document.getElementById('canvas');
    let ctx = canvas.getContext("2d");
    //context.fillStyle = start_background_color; // start_background_color is out of scope here
    ctx.clearRect(0, 0, canvas.width,canvas.height);
    ctx.fillRect(0, 0, canvas.width,canvas.height);
  }
  getMousePos(canvas:any, e:any) {
    var rect = canvas.getBoundingClientRect();
    if (window.matchMedia("(max-width: 600px)").matches) {
      const {clientX, clientY} = e.touches[0];
      const {left, top} = rect;
      return {
        x: clientX - left,
        y: clientY - top,
      }
    } else {
      return {
        x: ((e.clientX - rect.left) / (rect.right - rect.left)) * canvas.width,
        y: ((e.clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height,
      }
    }
  }
  


  imgLink() {
    let canvas = <HTMLCanvasElement> document.getElementById('canvas');
    const link = canvas.toDataURL("image/png");
    return link;
  }
 

}

