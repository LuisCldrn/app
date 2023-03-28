import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(
    private router: Router, 
    private scroller: ViewportScroller
  ) { }

  goTo(location: string) {
    this.scroller.scrollToAnchor(location);
  }  


}
