import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../About/about/about.component';
import { HeaderComponent } from '../Header/header/header.component';
import { ShopComponent } from '../Shop/shop/shop.component';
import { NavbarComponent } from '../navbar/navbar/navbar.component';
import { FooterComponent } from '../footer/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogComponent } from '../blog/blog/blog.component';
import { InfoComponent } from '../info/info/info.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'info', component: InfoComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    ShopComponent,
    InfoComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Ensure FormsModule is here
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
