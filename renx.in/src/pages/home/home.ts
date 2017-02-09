import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Firebase } from '../../providers/firebase';
import { ResultPage } from '../result/result';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  text
  constructor(public navCtrl: NavController,
    public firebase: Firebase) {
  }

  share() {
    var navCtrl = this.navCtrl;
    console.log(this.text);
    console.log('inside share');
    var firebase = this.firebase;
    firebase.putText(this.text)
      .then((value) => {
        console.log(value);
        if (value) {
          this.navCtrl.push(ResultPage, {
            value: value
          });
        }
      });
  }

}
