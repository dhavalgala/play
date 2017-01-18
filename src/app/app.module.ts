import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { PlayService } from '../providers/play-service';
import { ViewsPipe } from '../providers/views.pipe';
import { TimeAgoPipe } from '../providers/timeago.pipe';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TrendingTab } from '../pages/trending/trending';
import { LatestTab } from '../pages/latest/latest';
import { WatchVideoPage } from '../pages/watch/watch';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TrendingTab,
    LatestTab,
    ViewsPipe,
    TimeAgoPipe,
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
