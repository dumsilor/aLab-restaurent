import { Injectable } from "@angular/core";

@Injectable ( {
    providedIn: 'root'
})

export class SellerService { 
    sellerItems: { name: string, imgPath: string, blob: string}[] = [
        {
            name: "Chicken Meatbox",
             imgPath: "../../../assets/images/best-seller/Meatbox.jpg",
             blob: "../../../assets/images/blob.svg"
        },
        {
            name: "Pop Chicken",
            imgPath: "../../../assets/images/best-seller/Popcorn-Chicken-1.png",
            blob: "../../../assets/images/blob_2.svg"

        },
        {
            name: "Potato Wedges",
            imgPath: "../../../assets/images/best-seller/Potato-wedges.jpg",
            blob: "../../../assets/images/blob_3.svg"

        }
    ]

    getSellerItems(){
        return this.sellerItems.slice();
    }
}