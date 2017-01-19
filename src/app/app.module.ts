import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { PlayService } from '../providers/play-service';

import { YoutubeDirective } from '../directives/youtube-iframe.direcive';

import { ViewsPipe } from '../pipes/views.pipe';
import { TimeAgoPipe } from '../pipes/timeago.pipe';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TrendingTab } from '../pages/trending/trending';
import { LatestTab } from '../pages/latest/latest';
import { WatchVideoPage } from '../pages/watch/watch';

@NgModule({
  declarations: [
    MyApp,
    ViewsPipe,
    TimeAgoPipe,
    YoutubeDirective,
    HomePage,
    TrendingTab,
    LatestTab,
    WatchVideoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TrendingTab,
    LatestTab,
    WatchVideoPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, PlayService],
})
export class AppModule { }
