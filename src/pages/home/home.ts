
import { Subscription } from 'rxjs/Subscription';
import { Meuchas } from './../../models/menuscha';
import { BeverageServiceProvider } from './../../providers/beverage-service/beverage-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  menuChas: Meuchas[];
  sub:Subscription;
  constructor(public navCtrl: NavController,private beverageServiceProvider: BeverageServiceProvider ) {

  }

  private getData(){

   this.sub = this.beverageServiceProvider.getAllData().subscribe(
     (menuChas:Meuchas[])=> this.menuChas = menuChas
   );

  }
  ionViewWillEnter(){
     this.getData();
  }
  ionViewWillLeave(){
    this.sub.unsubscribe();
  }

}
