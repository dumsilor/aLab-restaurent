import { Component, Input } from '@angular/core';
import { Feature } from '../feature.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-set.component.html',
  styleUrl: './feature-set.component.scss'
})
export class FeatureSetComponent {
@Input() feature!: Feature;
}
