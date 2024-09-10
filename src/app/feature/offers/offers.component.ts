import { Component } from '@angular/core';
import { OfferComponent } from "./offer/offer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [OfferComponent,CommonModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent {
  offers: {offerType: string, offerName: string, offerAmount: number, offerImgPath: string}[] = [
    {
      offerType: 'percentage_discount',
      offerName: '10% off',
      offerAmount: 10,
      offerImgPath: "../../../assets/images/best-seller/Meatbox.jpg"
    }
  ]
}
