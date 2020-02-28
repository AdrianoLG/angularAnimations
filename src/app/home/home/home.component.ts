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
      }
    }, 20);
  }

}
