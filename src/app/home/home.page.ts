import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  recommendedItems = [
    {
      title: "Penelope's",
      subtitle: 'Baked goods',
      collectTime: '17:40 - 18:00',
      price: '£4.00',
      image: 'assets/imgs/bakery.jpg',
      link: '/penelopes',
    },
    {
      title: 'Vegetarian',
      subtitle: 'Vegetarian meals',
      collectTime: '12:00 - 14:00',
      price: '£6.00',
      image: 'assets/imgs/vegetarian.jpg',
      link: '/vegetarian',
    },
  ];

  collectNowItems = [
    {
      title: 'Super Marche',
      subtitle: 'Groceries',
      collectTime: '10:00 - 14:00',
      price: '£4.00',
      image: 'assets/imgs/groceries.jpg',
      link: '/super-marche',
    },
    {
      title: 'Pastries',
      subtitle: 'Pastries',
      collectTime: '08:00 - 10:00',
      price: '£3.00',
      image: 'assets/imgs/pastries.jpg',
      link: '/pastries',
    },
  ];

  constructor(private navCtrl: NavController) {}

  navigateTo(link: string) {
    this.navCtrl.navigateForward(link);
  }
}
