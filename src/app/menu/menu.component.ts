import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../service/scroll.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  public screenHeight: number = 0;


  constructor(

    private router: Router,
    public ScrollService: ScrollService, 
    private scroller: ViewportScroller
  ) {

  }

  isActiveTab() {
    console.log(this.scroller.getScrollPosition()[1]);
    console.log(this.screenHeight)
  }

  ngOnInit(): void {
      this.screenHeight = window.innerHeight;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenHeight = window.innerHeight;
  }

}
