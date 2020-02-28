import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    trigger('animateIt', [
      state('in', style({
        transform: 'translateX(-50%)'
      })),
      state('normal', style({
        border: '3px solid black',
        opacity: '1',
        transform: 'translateX(0)',
        width: '150px'
      })),
      state('animate', style({
        background: 'white',
        border: '3px dashed green',
        color: 'black',
        height: '65px',
        opacity: '1',
        transform: 'translateX(0)',
        width: '250px'
      })),
      transition('* => normal', [
        animate('.5s ease-in')
      ]),
      transition('normal => animate', [
        animate('1s')
      ]),
      transition('animate => normal', [
        animate('.5s')
      ])
    ])
  ],
})
export class AnimationsComponent implements OnInit {
  isAnimate = false;
  constructor() { }

  ngOnInit() { }

  onAnimationEvent ( event: AnimationEvent ) {
    console.warn(`Animation Trigger: ${event.triggerName}`);
    console.warn(`Phase: ${event.phaseName}`);
    console.warn(`Total time: ${event.totalTime}`);
    console.warn(`From: ${event.fromState}`);
    console.warn(`To: ${event.toState}`);
    console.warn(`Element: ${event.element}`);
  }

  toggle() {
    this.isAnimate = !this.isAnimate;
  }

}
