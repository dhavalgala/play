import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { PlayService } from '../../providers/play-service';

@Component({
    templateUrl: 'watch.html'
})
export class WatchVideoPage {

    private videoId: any;
    videoDetail: any;
    relatedVideos: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public plt: Platform, private playService: PlayService) {
        this.videoId = navParams.get('videoId');
    }

    ionViewDidLoad() {
        this.getVideoDetail();
        this.getRelatedVideos();
    }

    getVideoDetail() {
        this.playService.getVideoDetail(this.videoId).subscribe(
            response => {
                console.log(response);
                this.videoDetail = response;
            },
            error => {
                console.log(error);
            }
        );
    }

    getRelatedVideos() {
        this.playService.getRelatedVideos(this.videoId).subscribe(
            response => {
                console.log(response);
                this.relatedVideos = response;
            },
            error => {
                console.log(error);
            }
        );
    }

}
