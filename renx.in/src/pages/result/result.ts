import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Result page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})
export class ResultPage {
  value
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.value = navParams.get('value');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

}
