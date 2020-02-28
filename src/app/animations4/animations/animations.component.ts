import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    trigger('focusInput', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.01)'
      })),
      transition('inactive => active', animate('.5s ease-in')),
      transition('active => inactive', animate('.5s ease-out'))
    ]),
    trigger('note', [
      state('inactive', style({
        opacity: '0'
      })),
      state('active', style({
        opacity: '1'
      })),
      transition('inactive => active', animate('.5s', keyframes([
        style({ opacity: 0, transform: 'translateY(0)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(-15px)', offset: 0.6 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
      ]))),
      transition('active => inactive', animate('.5s', keyframes([
        style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(-15px)', offset: 0.6 }),
        style({ opacity: 0, transform: 'translateY(100%)', offset: 1 }),
      ])))
    ])
  ]
})
export class AnimationsComponent4 implements OnInit {
  state: string;
  tasks: string[];

  constructor() { }

  ngOnInit() {
    this.tasks = new Array();
    this.tasks.push('First task');
    this.tasks.push('Second task');
    this.state = 'inactive';
  }

  toggleFocus() {
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

  addTask(event) {
    if (event.key === 'Enter') {
      this.tasks.push(event.target.value);
      event.target.value = '';
    }
  }

}
