import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TrendingTab } from '../pages/trending/trending';
import { PlaylistTab } from '../pages/playlist/playlist';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TrendingTab,
    PlaylistTab
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TrendingTab,
    PlaylistTab
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
