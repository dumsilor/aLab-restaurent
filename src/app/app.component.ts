import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { LandingContentComponent } from './landing-content/landing-content.component';
import { BusinessFeatureComponent } from "./business-feature/business-feature.component";
import { BestSellerComponent } from "./feature/best-seller/best-seller.component";
import { MenuComponent } from "./feature/menu/menu.component";
import { FooterComponent } from "./feature/footer/footer.component";
import { OffersComponent } from "./feature/offers/offers.component";
import { UserEntryComponent } from "./feature/user-entry/user-entry.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    LandingContentComponent,
    BusinessFeatureComponent,
    BestSellerComponent,
    MenuComponent,
    FooterComponent,
    OffersComponent,
    UserEntryComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aLab-restaurent';
}
