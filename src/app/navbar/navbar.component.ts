import { Component } from '@angular/core';

import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './nav/nav.component';
import { EntryComponent } from './entry/entry.component';
import { MobileToggleComponent } from './mobile-toggle/mobile-toggle.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, NavComponent, EntryComponent,MobileToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
