import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';
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

    getMoreRelatedVideos(infiniteScroll) {
        this.playService.getMoreRelatedVideos(this.videoId, this.relatedVideos.nextPageToken).subscribe(
            response => {
                console.log(response);
                for (let i = 0; i < response.items.length; i++) {
                    this.relatedVideos.items.push(response.items[i]);
                }
                this.relatedVideos.nextPageToken = response.nextPageToken;
                infiniteScroll.complete();
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

    shareVideo() {
        SocialSharing.share('', 'Watch "' + this.videoDetail.snippet.title + '" on YouTube', '', "https://youtu.be/" + this.videoId).then(() => {
            // Success!
        }).catch(() => {
            // Error!
        });
    }

    growDiv() {
        if (this.videoDetail.snippet.description) {
            let growDiv = document.getElementById('grow');
            if (growDiv.clientHeight) {
                this.showDesc = false;
                growDiv.style.height = 0 + "px";
                growDiv.style.marginBottom = 0 + "px";
            } else {
                this.showDesc = true;
                var wrapper = document.querySelector('.video-description');
                growDiv.style.height = wrapper.clientHeight + "px";
                growDiv.style.marginBottom = 10 + "px";
            }
        }
    }

}
