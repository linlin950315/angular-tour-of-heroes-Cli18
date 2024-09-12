import { Component } from '@angular/core';
import { Hero } from '../hero';

import { HEROES } from '../mock-heroes';
@Component({
  // standalone: true,
  // imports: [
  //   NgFor,
  // ],
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  //这里面是逻辑？
  heroes = HEROES; //array of heroes
  selectedHero?: Hero;
  //export interface Hero {
  //id: number;
  // name: string;
  //}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
