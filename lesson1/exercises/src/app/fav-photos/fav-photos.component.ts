import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Emily\'s Favorite Photos';
  image1 = 'https://i.kym-cdn.com/photos/images/facebook/000/956/770/d5c.jpg';
  image2 = 'https://64.media.tumblr.com/329bcdaf016cb146349a5a4fc6f59613/85ba49bf7990a33c-7d/s500x750/c311ab6fe3111d80ca60162c62db0907e03eb08d.jpg';
  image3 = 'https://i.imgur.com/GTpHKYQ.jpg';

  constructor() { }

  ngOnInit() {
  }

}