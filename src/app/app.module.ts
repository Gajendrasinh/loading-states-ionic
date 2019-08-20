import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from "@angular/cdk/layout";
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';
import { HeroModule } from '@pxblue/angular-components/core/hero';
import { ChannelValueModule } from '@pxblue/angular-components/core/channel-value';

import { MatToolbarModule, MatButtonModule, MatListModule, MatCardModule, MatGridListModule, MatIconModule, MatDividerModule } from "@angular/material";

import { PlaceholderCardComponent } from './components/placeholder-card.component';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, PlaceholderCardComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    BrowserAnimationsModule, 
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    HeroModule,
    MatIconModule,
    HttpClientModule,
    NgProgressIconsModule,
    ChannelValueModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
