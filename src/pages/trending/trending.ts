import { Component } from '@angular/core';
import { PlayService } from '../../providers/play-service';

@Component({
    templateUrl: 'trending.html'
})
export class TrendingTab {

    trendingVideos: any;

    constructor(private playService: PlayService) { }

    ionViewDidLoad() {
        this.getPopularVideos();
    }

    getPopularVideos() {
        this.playService.getPopularVideos().subscribe(
            response => {
                console.log(response);
                this.trendingVideos = response;
            },
            error => {
                console.log(error);
            }
        );
    }
}
