import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module'; // Import the AppRoutingModule
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ResumeComponent } from '../resume/resume.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';

@NgModule({
  declarations: [
    
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Include the AppRoutingModule here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
