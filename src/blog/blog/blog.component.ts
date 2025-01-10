import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app/app-routing.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  blogs = [
    {
      image: 'assets/images/b1.jpg',
      date: { day: 14, month: 'July' },
      title: 'Look even slightly believable. If you are',
      description:
        "Alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      link: '/blog/1',
    },
    {
      image: 'assets/images/b2.jpg',
      date: { day: 15, month: 'July' },
      title: 'Anything embarrassing hidden in the middle',
      description:
        "Alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      link: '/blog/2',
    },
  ];
}
