import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Login } from '../app.model/auth.model';
import {  Authentication} from "../app.services/auth.services";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public auth:Authentication,
    public route:Router,
    public toastController: ToastController
    ) { }

  ngOnInit() {
  }


  login(){
    const logindata= new Login;
    logindata.username='admin'
    logindata.password='12345'
    console.log('logdata',logindata);
    this.auth.get_login(logindata).subscribe(
      (res)=>{
        console.log(res);
        if(res.status==1){
          this.route.navigate(['/tabs/tab1']) 
        this.succeslogin()

        }else{
        this.falselogin()

        }
      },(error)=>{
        console.log(error);
      })
  }
  
  async succeslogin() {
    const toast = await this.toastController.create({
      message: 'ເຂົ້າສູ່ລະບົບສຳເລັດ',
      duration: 2000
    });
        
        toast.present();

  }
  async falselogin() {
    const toast = await this.toastController.create({
     message: 'ເຂົ້າສູ່ລະບົບບໍ່ສຳເລັດ ລະຫັກຜ່ານຫຼືຄິວອາໝົກອາຍຸ',
      duration: 5000
    });
    toast.present();
  }
}
