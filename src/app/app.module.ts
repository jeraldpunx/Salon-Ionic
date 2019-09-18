import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';

import { FilterPage } from './pages/filter/filter.page';
import { EnableLocationPage } from './pages/enable-location/enable-location.page';
import { SharePage } from './pages/share/share.page';
import { BookingSuccessfullyPage } from './pages/booking-successfully/booking-successfully.page';
import { CodeSendModalPage } from './pages/code-send-modal/code-send-modal.page';
import { NearSalonListPage } from './pages/near-salon-list/near-salon-list.page';
import { ImageModalPageModule } from './pages/image-modal/image-modal.module';

@NgModule({
  declarations: [
    AppComponent,
    CodeSendModalPage,
    BookingSuccessfullyPage,
    NearSalonListPage,
    SharePage,
    EnableLocationPage,
    FilterPage
  ],
  entryComponents: [
    CodeSendModalPage,
    BookingSuccessfullyPage,
    NearSalonListPage,
    SharePage,
    EnableLocationPage,
    FilterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ImageModalPageModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
