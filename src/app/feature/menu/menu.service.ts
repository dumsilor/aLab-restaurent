import { Injectable } from "@angular/core";
import { Menu } from './menu.model';

@Injectable({
    providedIn: 'root'
})

export class MenuService { 
    private MenuITems: Menu[] = [
        {
            name: "Chicken Meatbox",
            imgPath: "../../../assets/images/best-seller/Meatbox.jpg",
            price: 180
        },
        {
            name: "Chicken Meatbox",
            imgPath: "../../../assets/images/best-seller/Meatbox.jpg",
            price: 180
        },
        {
            name: "Chicken Meatbox",
            imgPath: "../../../assets/images/best-seller/Meatbox.jpg",
            price: 180
        }
    ]

    getItems() {
        return this.MenuITems.slice();
    }
 }