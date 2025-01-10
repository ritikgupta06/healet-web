import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isNavOpen = false;

  openNav() {
    this.isNavOpen = true;
  }

  closeNav() {
    this.isNavOpen = false;
  }
}
