import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../About/about/about.component';
import { HeaderComponent } from '../Header/header/header.component';
import { ShopComponent } from '../Shop/shop/shop.component';
import { NavbarComponent } from '../navbar/navbar/navbar.component';
import { FooterComponent } from '../footer/footer/footer.component';
import { BlogComponent } from '../blog/blog/blog.component';
import { InfoComponent } from '../info/info/info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'info', component: InfoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Import Routes
  exports: [RouterModule],
})
export class AppRoutingModule {}
