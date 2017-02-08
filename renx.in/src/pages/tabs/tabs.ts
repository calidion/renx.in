import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Firebase } from '../../providers/firebase';

let config = {
  apiKey: "AIzaSyBbVwmcpOje7p5lrIeruLsm_rkwZ6vN9yc",
  authDomain: "renxin-a35b4.firebaseapp.com",
  databaseURL: "https://renxin-a35b4.firebaseio.com",
  storageBucket: "renxin-a35b4.appspot.com",
  messagingSenderId: "547625641349"
};

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor(firebase: Firebase) {
    firebase.init(config);
    firebase.putText('hello')
    .then(function(value) {
      console.log(value);
      return firebase.getText(value);

    }).then(function(data) {
      console.log(data);
    });

  }
}
