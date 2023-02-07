import { Injectable } from '@angular/core';
import { babySister } from 'src/assets/profile.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  favoriteProfile: babySister[];

  constructor(private message: MessageService) { 
    this.favoriteProfile = []
  }

  addOrDelete(profile:babySister){
    let i: number;
    this.favoriteProfile.forEach((value:babySister)=>{
      i++;
      if(value.userid === profile.userid){
        this.favoriteProfile.splice(i,1);
        this.message.showPositiveInfos('Cette nounou a été retiré de vos favoris')
      }else{
        this.favoriteProfile.push(profile);
        this.message.showPositiveInfos('Cette nounou a été ajouté de vos favoris')
      }
    })
  }
}
