import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-single-profile',
  templateUrl: './single-profile.page.html',
  styleUrls: ['./single-profile.page.scss'],
})
export class SingleProfilePage implements OnInit {

  constructor(public modal : ModalController) { }

  async onShowModalPage(){
   let modal = await this.modal.create({component:ContactComponent});
    modal.present();
  }

  ngOnInit() {
  }

}
