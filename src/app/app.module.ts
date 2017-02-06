import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {DetailsPage} from '../pages/details/details';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SettingsPage,
    HomePage,
    TabsPage,
    DetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SettingsPage,
    HomePage,
    TabsPage,
    DetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
