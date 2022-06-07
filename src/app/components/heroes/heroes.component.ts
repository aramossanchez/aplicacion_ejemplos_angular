import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  heroes = [
    { id: 11, name: 'Spiderman'},
    { id: 12, name: 'Thor'},
    { id: 13, name: 'Deadpool'},
    { id: 14, name: 'Wolverine'},
    { id: 15, name: 'Captain America'},
    { id: 16, name: 'Hulk'},
    { id: 17, name: 'Dr. Strange'},
    { id: 18, name: 'Iron Man'},
    { id: 19, name: 'Ichigo'},
    { id: 20, name: 'Trafalgar D. Water Law'}
  ]

}
