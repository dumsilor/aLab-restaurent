import { Component, OnInit } from '@angular/core';
import { MenuItemComponent } from "./menu-item/menu-item.component";
import { MenuService } from './menu.service';
import { Menu } from './menu.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuItemComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  providers: [MenuService]
})
export class MenuComponent implements OnInit {
  menuItems!: Menu[];
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuItems = this.menuService.getItems();
  }
}
