import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular'; 
import { UserProvider } from '../../providers/user/user';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	username:string;
	password:string;
	repassword:string;
	email:string;
	confirmationText:string;

  constructor(public navCtrl: NavController, 
  						public navParams: NavParams,
  						public viewCtrl: ViewController,
  						public provider: UserProvider,
  						public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }
  register(){
  	if(this.username == undefined || 
  		this.password == undefined || 
  		this.repassword == undefined ||
  		this.email == undefined){
  		alert ("Please fill all fields")
  	}
  	else if(this.password != this.repassword){
  		alert ("Passwords do not match")
  	}
  	else{
	  	console.log(this.password);
	  	this.provider.createUser(this.username, this.password, this.email);
	  	this.presentToast();
	  	this.viewCtrl.dismiss();
	  }

  }
  

}
