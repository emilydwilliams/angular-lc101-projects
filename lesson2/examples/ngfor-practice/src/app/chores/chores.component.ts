import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Buy groceries', 'Clean Bathroom'];
   todoTitles = ["Tomorrow's Chores", "Forever Chores"];

   constructor() { }

   ngOnInit() {
   }

}
