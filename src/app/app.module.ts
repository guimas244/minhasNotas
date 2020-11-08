import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCm22yOn43z0Iad5ZsJ_8kJo-j6ap310ng",
      authDomain: "trabalho-ionic-9c54a.firebaseapp.com",
      databaseURL: "https://trabalho-ionic-9c54a.firebaseio.com",
      projectId: "trabalho-ionic-9c54a",
      storageBucket: "trabalho-ionic-9c54a.appspot.com",
      messagingSenderId: "1019187403437",
      appId: "1:1019187403437:web:89b23d447e4349bae58424",
      measurementId: "G-PJDDGJN62H"
    }),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
