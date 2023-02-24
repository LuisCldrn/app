import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(
    private router: Router
  ) {

  }

  private isHomeActive = this.router.url.startsWith('/home');
  homeClasses = {
    "active": this.isHomeActive,
    "nav-link": true
  }
  
}
