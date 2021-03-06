import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import * as firebase from 'firebase';

/*
  Generated class for the Firebase provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

let config = {
  apiKey: "AIzaSyBbVwmcpOje7p5lrIeruLsm_rkwZ6vN9yc",
  authDomain: "renxin-a35b4.firebaseapp.com",
  databaseURL: "https://renxin-a35b4.firebaseio.com",
  storageBucket: "renxin-a35b4.appspot.com",
  messagingSenderId: "547625641349"
};

@Injectable()
export class Firebase {
  MAX_EXPIRE_TIME = 24 * 60 * 60 * 1000;
  constructor() {
    console.log('Hello Firebase Provider');
    firebase.initializeApp(config);
  }


  putText(text) {
    var key = Date.now() % this.MAX_EXPIRE_TIME;
    var days = (Date.now() / this.MAX_EXPIRE_TIME).toFixed(0);
    let ref = firebase.database().ref(days + '/' + key);
    console.log(key);
    return ref.set({
      text: text
    }).then(function (data) {
      console.log(data);
      return key;
    });
  }

  getText(key) {
    var days = (Date.now() / this.MAX_EXPIRE_TIME).toFixed(0);
    return firebase.database().ref(days + '/' + key).once('value').then(function (snapshot) {
      var value = snapshot.val();
      console.log(value);
      return value;
    });
  }

}
