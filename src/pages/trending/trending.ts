import { Component } from '@angular/core';
import { PlayService } from '../../providers/play-service';

@Component({
    templateUrl: 'trending.html'
})
export class TrendingTab {

    trendingVideos: any;

    constructor(private playService: PlayService) { }

    ionViewDidLoad() {
        this.getTrendingVideos();
    }

    getTrendingVideos() {
        this.playService.getTrendingVideos().subscribe(
            response => {
                console.log(response);
                this.trendingVideos = response;
            },
            error => {
                console.log(error);
            }
        );
    }

    getMoreTrendingVideos(infiniteScroll) {
        this.playService.getMoreTrendingVideos(this.trendingVideos.nextPageToken).subscribe(
            response => {
                console.log(response);
                for (let i = 0; i < response.items.length; i++) {
                    this.trendingVideos.items.push(response.items[i]);
                }
                this.trendingVideos.nextPageToken = response.nextPageToken;
                infiniteScroll.complete();
            },
            error => {
                console.log(error);
            }
        );
    }
}
