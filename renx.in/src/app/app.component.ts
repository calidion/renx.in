import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import * as firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      let config = {
        apiKey: "AIzaSyBbVwmcpOje7p5lrIeruLsm_rkwZ6vN9yc",
        authDomain: "renxin-a35b4.firebaseapp.com",
        databaseURL: "https://renxin-a35b4.firebaseio.com",
        storageBucket: "renxin-a35b4.appspot.com",
        messagingSenderId: "547625641349"
      };
      firebase.initializeApp(config);
    });
  }
}
