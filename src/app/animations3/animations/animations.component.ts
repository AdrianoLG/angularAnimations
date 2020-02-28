import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    trigger('inOut', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      state('out', style({ opacity: 0, transform: 'translateX(100%)' })),
      transition(':enter', [
        //style({ opacity: 0, transform: 'translateX(-100%)'}),
        animate(1000, keyframes([
          style({ transform: 'translateX(-100%) rotate(10deg)'}),
          style({ transform: 'translateX(-90%) rotate(20deg)'}),
          style({ transform: 'translateX(-80%) rotate(30deg)'}),
          style({ transform: 'translateX(-60%) rotate(50deg)'}),
          style({ transform: 'translateX(-50%) rotate(90deg)'}),
          style({ transform: 'translateX(-30%) rotate(130deg)'}),
          style({ transform: 'translateX(-20%) rotate(150deg)'}),
          style({ transform: 'translateX(-10%) rotate(160deg)'}),
          style({ transform: 'translateX(-5%) rotate(170deg)'}),
          style({ transform: 'translateX(0) rotate(180deg)'})
        ]))
      ]),
      transition(':leave', [
        animate(1000)
      ])
    ])
  ]
})
export class AnimationsComponent3 implements OnInit {
  rotation = 0;
  constructor() { }

  ngOnInit() {
  }

  onAnimationEvent ( event: AnimationEvent ) {
    console.group(`${event.triggerName}`);
    console.warn(`Phase: ${event.phaseName}`);
    console.warn(`Total time: ${event.totalTime}`);
    console.warn(`From: ${event.fromState}`);
    console.warn(`To: ${event.toState}`);
    console.warn(`Element: ${event.element}`);
    console.groupEnd();
  }

}
