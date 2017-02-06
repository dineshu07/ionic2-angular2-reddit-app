import { Component } from '@angular/core';
import {RedditService} from '../../app/services/reddit.service';
import { NavController } from 'ionic-angular';
import {DetailsPage} from '../details/details';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any;

  constructor(public navCtrl: NavController, private redditservice: RedditService) {

  }
ngOnInit(){
  this.getPosts('sports', 20);
}

getPosts(category, limit){
  this.redditservice.getPost(category, limit).subscribe(res => {
    this.items = res.data.children;
    console.log(this.items);
  })
}


viewItem(item){

  this.navCtrl.push(DetailsPage, {
    item:item
  });
}
}
