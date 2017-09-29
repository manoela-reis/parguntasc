import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CrDitosPage } from '../pages/cr-ditos/cr-ditos';
import { BancoDeCasosPage } from '../pages/banco-de-casos/banco-de-casos';
import { SaibaMaisPage } from '../pages/saiba-mais/saiba-mais';


import { HomePage } from '../pages/home/home';
import { Data } from '../providers/data/data';



@Component({
  templateUrl: 'app.html',
  providers: [Data],
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToCrDitos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CrDitosPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToBancoDeCasos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BancoDeCasosPage);
  }goToSaibaMais(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SaibaMaisPage);
  }
}
