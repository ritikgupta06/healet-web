import { Routes } from '@angular/router';
import { HeaderComponent } from '../Header/header/header.component';
import { AboutComponent } from '../About/about/about.component';
import { ShopComponent } from '../Shop/shop/shop.component';
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../navbar/navbar/navbar.component';
import { FooterComponent } from '../footer/footer/footer.component';
import { BlogComponent } from '../blog/blog/blog.component';
import { InfoComponent } from '../info/info/info.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
