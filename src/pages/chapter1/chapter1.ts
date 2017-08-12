import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Chapter1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter1',
  templateUrl: 'chapter1.html',
})
export class Chapter1Page {
  profileCharacter1: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profileCharacter1 = '../../assets/img/profile-1.png';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Chapter1Page');
  }

}
