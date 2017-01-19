import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
    templateUrl: 'watch.html'
})
export class WatchVideoPage {

    private videoId: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public plt: Platform) {
        this.videoId = navParams.get('videoId');
        console.log("videoId=" + this.videoId);
    }

    ionViewDidLoad() { }

}
