import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CrDitosPage } from '../pages/cr-ditos/cr-ditos';
import { SaibaMaisPage } from '../pages/saiba-mais/saiba-mais';
import { BancoDeCasosPage } from '../pages/banco-de-casos/banco-de-casos';
import { QuestionarioPage } from '../pages/questionario/questionario';
import { ResultadoPage } from '../pages/resultado/resultado';
import { CasoEmTextoPage } from '../pages/caso-em-texto/caso-em-texto';
import { HttpModule }    from '@angular/http';

import { FlashCardComponent } from '../components/flash-card/flash-card';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CrDitosPage,
    SaibaMaisPage,
    BancoDeCasosPage,
    QuestionarioPage,
    ResultadoPage,
    CasoEmTextoPage,
    FlashCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CrDitosPage,
    SaibaMaisPage,
    BancoDeCasosPage,
    QuestionarioPage,
    ResultadoPage,
    CasoEmTextoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Data,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}