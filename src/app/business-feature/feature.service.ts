import { Injectable } from "@angular/core";
import { Feature } from "./feature.model";


@Injectable({
    providedIn: 'root'})


export class FeatureService {
    features: Feature[] = [
        {
          icon: "bi-fast-forward",
          header: "Fresh Food",
          text: "Your Food will be delivered 100% fresh to your home. We do not deliver stale food."
        },
        {
          icon: "bi-check2-circle",
          header: "Fresh Food",
          text: "We handpick fresh ingridients for your food. We guarantee quality."
        },
        {
          icon: "bi-basket-fill",
          header: "Easy to order",
          text: "Select Item, Add to Cart, order and enjoy!"
        }
      ]

      getFeatures() {
        return this.features;
      }
}