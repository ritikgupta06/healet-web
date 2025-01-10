import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isNavOpen = false;

  openNav() {
    this.isNavOpen = true;
  }

  closeNav() {
    this.isNavOpen = false;
  }
}
