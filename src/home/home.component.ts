import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar/navbar.component';
import { AboutComponent } from '../About/about/about.component';
import { ShopComponent } from '../Shop/shop/shop.component';
import { InfoComponent } from '../info/info/info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, AboutComponent, ShopComponent, InfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
