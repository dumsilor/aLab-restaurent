import { Component, OnInit } from '@angular/core';
import { ItemComponent } from "./item/item.component";
import { CommonModule } from '@angular/common';
import { SellerService } from './seller.service';

@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [ItemComponent, CommonModule],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss',
  providers: [SellerService]
})
export class BestSellerComponent implements OnInit {
  sellerItems: {name: string, imgPath: string, blob: string}[] = [];
  constructor(private sellerService: SellerService) { }

  ngOnInit(): void {
    this.sellerItems = this.sellerService.getSellerItems();
  }

}
