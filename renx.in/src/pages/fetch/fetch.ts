import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Firebase } from '../../providers/firebase';

/*
  Generated class for the Fetch page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fetch',
  templateUrl: 'fetch.html'
})
export class FetchPage {
  code
  fetched
  constructor(public navCtrl: NavController, public navParams: NavParams, public firebase: Firebase) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FetchPage');
  }

  fetch() {
    try {
      this.firebase.getText(this.code).then(saved => {
        this.fetched = saved.text;
      });
    } catch (e) {
      this.fetch();
    }
  }

}
