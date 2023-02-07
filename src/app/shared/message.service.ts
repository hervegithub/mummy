import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastCtrl: ToastController) { }

  async showPositiveInfos(message:string){
    const toast = await this.toastCtrl.create({
      message: message,
      position: 'bottom',
      duration:2000
    });

    toast.present();
  }
}
