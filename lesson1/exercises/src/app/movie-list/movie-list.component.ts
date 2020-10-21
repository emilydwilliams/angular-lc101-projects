import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['I\'m Thinking of Ending Things', 'The Social Network', 'Eternal Sunshine of the Spotless Mind', 'Hidden Figures'];

   constructor() { }

   ngOnInit() {
   }

}
