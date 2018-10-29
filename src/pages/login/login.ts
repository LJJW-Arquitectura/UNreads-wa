import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { AllbooksPage } from '../allbooks/allbooks';
import { UserProvider } from '../../providers/user/user';
import { GlobalProvider } from "../../providers/global/global";
import { ToastController } from 'ionic-angular';

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

	username:string;
	password:string;
	user$;
	id$

  constructor(public navCtrl: NavController, 
  						public navParams: NavParams,
  						public provider: UserProvider,
              public viewCtrl: ViewController,
  						public global: GlobalProvider,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Inicio de Sesion correcto',
      duration: 3000
    });
    toast.present();
  }
  noAuthToast() {
    const toast = this.toastCtrl.create({
      message: 'Nombre de usuario o contraseña incorrectos',
      duration: 3000
    });
    toast.present();
  }
  login(){
  	//console.log("Username: "+this.username)
  	//console.log("Password: "+this.password)
    //Esta es la linea que no se digna funcionar hasta no darle doble click
    if(this.username == undefined || 
      this.password == undefined ){
      alert ("Porfavor llenar todos los campos")
    }
    else{
    	this.provider.getUserByUsernameAndPassword(this.username,this.password).subscribe(user =>
      {
        if(user!=undefined){
          console.log("AuthId: "+user.id)
          this.global.authenticatedId = user.id;
          this.global.user = user.username;
          this.presentToast();
          this.navCtrl.setRoot(AllbooksPage);
          this.navCtrl.popToRoot();
        }
        else{
          this.noAuthToast();
        }
      });
    }
  }
  goRegister(){
  	this.navCtrl.push(RegisterPage);
  }
  

}
