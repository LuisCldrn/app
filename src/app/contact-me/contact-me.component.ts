import { Component } from '@angular/core';
import { ScrollService } from '../service/scroll.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

  constructor(
    public ScrollService: ScrollService,
    
  ) {
    
  }

}
