import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { LoginProvider } from '../../Providers/services/loginService';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginDados = {
    email: null,
    password: null
  }

  constructor(public navCtrl: NavController,
    public LoginProvider: LoginProvider, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  cadastro():void{
    this.navCtrl.push(CadastroPage);
  }

  entrar():void{
    console.log('entrou')
    this.LoginProvider.postLogin('/auth/authenticate', this.loginDados)
    .then(dadosLogin => {
      
      console.log(JSON.parse(dadosLogin["_body"])); // data received by server 
      
    }, (err) => {
      console.log("Erro", err);
  });
  }

}
