import { Component } from '@angular/core';
import { ScrollService } from '../service/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    public ScrollService: ScrollService, 
  ) {}

}
