import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { ScrollService } from '../service/scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
      
  }

  Names: string[] = ['SOFTWARE DEVELOPER', 'FULLSTACK DEVELOPER', 'FRONTEND DEVELOPER', 'JAVA DEVELOPER'];

  constructor(
    public ScrollService: ScrollService, 
  ) {}

  role: string = '';
  
  myTimer = setTimeout(()=> this.role+= this.Names[1], 1000)
  

    

    
}
