import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent},
  {path: 'aboutme', component: AboutmeComponent, children: [{path: 'aboutme', component: AboutmeComponent}, {path: 'projects', component: ProjectsComponent}]}, 
  {path: 'projects', component: ProjectsComponent},
  {path: 'contactme', component: ContactMeComponent},
  {path: 'test', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
