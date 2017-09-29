import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data2 } from '../../providers/data/data2';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-caso-em-texto',
  templateUrl: 'caso-em-texto.html'
})
export class CasoEmTextoPage {

  casos: any;

  constructor(public navCtrl: NavController,public dataService: Data2) {
  }
  ionViewDidLoad() {
    console.log("entrei aquiiiiii!!!!!");
  }
}
