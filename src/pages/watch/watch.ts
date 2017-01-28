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
    showDesc: boolean = false;

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
                this.videoDetail = response.items[0];
                if (this.videoDetail.snippet.description) {
                    this.videoDetail.snippet.description = this.videoDetail.snippet.description.split(/[\r\n]+/g).join('<br/>');
                }
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

    watchVideo(videoId) {
        this.navCtrl.push(WatchVideoPage, {
            videoId: videoId
        });
    }

    growDiv() {
        if (this.videoDetail.snippet.description) {
            let growDiv = document.getElementById('grow');
            if (growDiv.clientHeight) {
                this.showDesc = false;
                growDiv.style.height = 0 + "px";
            } else {
                this.showDesc = true;
                var wrapper = document.querySelector('.video-description');
                growDiv.style.height = wrapper.clientHeight + "px";
            }
        }
    }

}
