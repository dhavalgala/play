import { Component } from '@angular/core';
import { PlayService } from '../../providers/play-service';

@Component({
    templateUrl: 'latest.html'
})
export class LatestTab {

    latestVideos: any;

    constructor(private playService: PlayService) { }

    ionViewDidLoad() {
        this.getLatestVideos();
    }

    getLatestVideos() {
        this.playService.getLatestVideos().subscribe(
            response => {
                console.log(response);
                this.latestVideos = response;
            },
            error => {
                console.log(error);
            }
        );
    }

    getMoreLatestVideos(infiniteScroll) {
        this.playService.getMoreLatestVideos(this.latestVideos.nextPageToken).subscribe(
            response => {
                console.log(response);
                for (let i = 0; i < response.items.length; i++) {
                    this.latestVideos.items.push(response.items[i]);
                }
                this.latestVideos.nextPageToken = response.nextPageToken;
                infiniteScroll.complete();
            },
            error => {
                console.log(error);
            }
        );
    }
}
