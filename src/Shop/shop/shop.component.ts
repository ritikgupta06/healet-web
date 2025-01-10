import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {
  products = [
    {
      name: 'Necklace',
      price: 200,
      image: 'images/p1.png',
      link: '/product/1',
    },
    {
      name: 'Necklace',
      price: 300,
      image: 'images/p2.png',
      link: '/product/2',
    },
    {
      name: 'Necklace',
      price: 110,
      image: 'images/p3.png',
      link: '/product/3',
    },
    { name: 'Ring', price: 45, image: 'images/p4.png', link: '/product/4' },
    { name: 'Ring', price: 95, image: 'images/p5.png', link: '/product/5' },
    { name: 'Earrings', price: 70, image: 'images/p6.png', link: '/product/6' },
    {
      name: 'Earrings',
      price: 400,
      image: 'images/p7.png',
      link: '/product/7',
    },
    {
      name: 'Necklace',
      price: 450,
      image: 'images/p8.png',
      link: '/product/8',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
