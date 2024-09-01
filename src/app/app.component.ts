import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingContentComponent } from './landing-content/landing-content.component';
import { BusinessFeatureComponent } from "./business-feature/business-feature.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    LandingContentComponent, 
    BusinessFeatureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aLab-restaurent';
}
