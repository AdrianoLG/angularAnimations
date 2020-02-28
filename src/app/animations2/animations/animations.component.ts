import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger, AnimationEvent } from '@angular/animations';


@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    trigger('animateIt', [
      state('normal', style({
        background: 'lightblue',
        'border-radius': '0',
        color: 'darkblue'
      })),
      state('animate', style({
        background: 'yellow',
        border: '3px solid darkorange',
        'border-radius': '100%',
        color: 'darkorange'
      })),
      transition('void => normal', [
        style({
          color: 'white',
          transform: 'translateX(-100%)'
        }),
        animate('.5s'),
        query('p', [
          style({
            'font-size': '0',
            transform: 'translate(250%, -50%)',
          }),
          stagger('0s', [
            animate('.5s', style({
              'font-size': '2rem',
              transform: 'translate(-50%, -50%)',
            }))
          ])
        ]),
      ]),
      transition('normal <=> animate', [
        animate('.5s')
      ])
    ]),
  ],
})
export class AnimationsComponent2 implements OnInit {
  isAnimate: boolean;
  isTransform: boolean;

  constructor() { }

  ngOnInit() {
    this.isAnimate = false;
    this.isTransform = false;
  }

  toggle() {
    this.isAnimate = !this.isAnimate;
    this.isTransform = !this.isTransform;
  }

}
