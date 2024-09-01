import { Component, OnInit } from '@angular/core';
import { FeatureService } from './feature.service';
import { Feature } from './feature.model';
import { FeatureSetComponent } from "./feature-set/feature-set.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-feature',
  standalone: true,
  imports: [FeatureSetComponent, CommonModule],
  templateUrl: './business-feature.component.html',
  styleUrl: './business-feature.component.scss'
})
export class BusinessFeatureComponent implements OnInit {

  features: Feature[] = [];

  constructor (private featureService: FeatureService) {}

  ngOnInit(): void {
    this.features = this.featureService.getFeatures();
  }
}
