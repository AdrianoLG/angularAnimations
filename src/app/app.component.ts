import { Component, Renderer2, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angularAnimations';

  constructor(
    private _renderer: Renderer2,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this._router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        let url = val.url;
        url = url.replace('/', '');
        document.querySelectorAll('.navbar-item').forEach(function(navbaritem) {
          navbaritem.classList.remove('is-active');
          if (navbaritem.textContent.toLowerCase().trim().replace(' ', '') == url) {
            navbaritem.classList.add('is-active');
            console.log(navbaritem);
          }
        });
      }
    });
  }

}
