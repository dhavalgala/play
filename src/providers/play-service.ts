import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PlayService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PlayService {

  private headers = new Headers();
  private options: any;
  private params: URLSearchParams = new URLSearchParams();

  constructor(public http: Http) {
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');

    this.options = new RequestOptions({ headers: this.headers });

    this.params.set("key", "AIzaSyAx9mqCCaF9Bp7AkatHxg9SVVfGxgVwohM");
  }

  getTrendingVideos() {
    this.params.set("chart", "mostPopular");
    this.params.set("type", "video");
    this.params.set("maxResults", "10");
    this.params.set("part", "id,snippet,statistics");

    this.options.search = this.params;

    return this.http.get("https://www.googleapis.com/youtube/v3/videos", this.options).map(res => res.json());
  }

  getMoreTrendingVideos(nextPageToken) {
    this.params.set("chart", "mostPopular");
    this.params.set("type", "video");
    this.params.set("maxResults", "10");
    this.params.set("part", "id,snippet,statistics");
    this.params.set("pageToken", nextPageToken);

    this.options.search = this.params;

    return this.http.get("https://www.googleapis.com/youtube/v3/videos", this.options).map(res => res.json());
  }

  getLatestVideos() {
    this.params.set("type", "video");
    this.params.set("order", "date");
    this.params.set("maxResults", "10");
    this.params.set("part", "id,snippet");
    this.options.search = this.params;

    return this.http.get("https://www.googleapis.com/youtube/v3/search", this.options).map(res => res.json());
  }

  getMoreLatestVideos(nextPageToken) {
    this.params.set("type", "video");
    this.params.set("order", "date");
    this.params.set("maxResults", "10");
    this.params.set("part", "id,snippet");
    this.params.set("pageToken", nextPageToken);

    this.options.search = this.params;

    return this.http.get("https://www.googleapis.com/youtube/v3/search", this.options).map(res => res.json());
  }
}
