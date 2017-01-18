import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { TrendingTab } from '../trending/trending';
import { LatestTab } from '../latest/latest';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  trending: any;
  latest: any;
  tabsPlacement = "top";

  constructor(public navCtrl: NavController, public navParams: NavParams, public plt: Platform) {
    if (this.plt.is('ios')) {
      this.tabsPlacement = "bottom";
    }
    this.trending = TrendingTab;
    this.latest = LatestTab;
  }

  ionViewDidLoad() { }

}
