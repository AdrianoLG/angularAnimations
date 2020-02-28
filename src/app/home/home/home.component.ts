import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('dog', {static: false}) dog: ElementRef;
  total = -844;
  i = 747;
  iTotal = 747;
  iI = -844;

  constructor(private _renderer: Renderer2) { }

  ngOnInit() {
    this.moveDog();
  }

  moveDog() {
    setTimeout(() => {
      this._renderer.setStyle(this.dog.nativeElement, 'transform', `translateX(${this.i}%)`);
      this.i = this.i - 1;
      if (this.i >= this.total) {
        this.moveDog();
      } else {
        console.log('MoveDog else');
        this.i = 747;
        this._renderer.setStyle(this.dog.nativeElement, 'transform', 'translateX(-844%)');
        this.moveDogInverted();
      }
    }, 20);
  }

  moveDogInverted() {
    setTimeout(() => {
      this._renderer.setStyle(this.dog.nativeElement, 'transform', `translateX(${this.iI}%) scaleX(-1)`);
      this.iI = this.iI + 1;
      if (this.iI < this.iTotal) {
        this.moveDogInverted();
      } else {
        console.log('MoveDogInverted else');
        this.iI = -844;
        this._renderer.setStyle(this.dog.nativeElement, 'transform', 'translateX(747%)');
        this.moveDog();
      }
    }, 20);
  }

}
