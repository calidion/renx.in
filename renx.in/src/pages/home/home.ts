import { Component } from '@angular/core';

import { LoadingController } from 'ionic-angular';

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
    public loadingCtrl: LoadingController,
    public firebase: Firebase) {
  }

  share() {
    console.log(this.text);
    var firebase = this.firebase;
    var loading = this.loadingCtrl.create({
      content: '正在分享...',
    });
    loading.present();
    firebase.putText(this.text)
      .then((value) => {
        console.log(value);
        loading.dismiss();
        if (value) {
          this.text = '';
          this.navCtrl.push(ResultPage, {
            value: value
          });
        }
      });
  }
}
