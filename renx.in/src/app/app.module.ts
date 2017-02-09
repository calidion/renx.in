import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ResultPage } from '../pages/result/result';
import { HomePage } from '../pages/home/home';
import { FetchPage } from '../pages/fetch/fetch';
import { TabsPage } from '../pages/tabs/tabs';
import { Firebase } from '../providers/firebase';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ResultPage,
    HomePage,
    FetchPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ResultPage,
    FetchPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Firebase]
})
export class AppModule {}
