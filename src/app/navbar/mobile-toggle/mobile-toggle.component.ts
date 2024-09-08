import { Component } from '@angular/core';

import { DropdownDirective } from '../../shared/dropdown.directive';

@Component({
  selector: 'app-mobile-toggle',
  standalone: true,
  imports: [DropdownDirective],
  templateUrl: './mobile-toggle.component.html',
  styleUrl: './mobile-toggle.component.scss',
})
export class MobileToggleComponent {

}
 