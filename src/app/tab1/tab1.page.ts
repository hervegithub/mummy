import { Component } from '@angular/core';
import { babySister } from 'src/assets/profile.model';
import { FavoriteService } from '../shared/favorite.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  babySister:babySister[];
  isSelected: boolean = false;

  constructor(private favoriteSrv: FavoriteService) {
    this.babySister = [
      {
        userid:1,
        firstName: "Chantal",
        lastName: "Ayissa",
        nombreMission: 2,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore nulla reprehenderit error nobis in aspernatur.",
        price:0.0,
        photoProfile:"",
        seddonime:"Mammy Chantal",
        isLike: true
      },
      {
        userid:2,
        firstName: "Alida",
        lastName: "Françoise",
        nombreMission: 2,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore nulla reprehenderit error nobis in aspernatur.",
        price:0.0,
        photoProfile:"",
        seddonime:"Maa alida",
        isLike: false,
      }
    ];
  }

  onAddToFavorite(userIndex: number){
    this.babySister[userIndex].isLike = !this.babySister[userIndex].isLike;
    this.favoriteSrv.addOrDelete(this.babySister[userIndex]);
  }

}
