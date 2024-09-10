import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss'
})
export class OfferComponent {
  @Input() currentOffer!: {offerType: string, offerName: string, offerAmount: number, offerImgPath: string};
}
