import { Component, Input, OnInit } from '@angular/core';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './app.component.html',
  template: ` <h1>{{title}}</h1>              
              
              <h2>My Heroes</h2>
              
              <ul class="heroes">
                <li *ngFor="let hero of heroes"
                  [class.selected]="hero === selectedHero"
                  (click)="onSelect(hero)">
                  <span class="badge">{{hero.id}}</span> {{hero.name}}
                </li>
              </ul>
              <hero-detail [hero]="selectedHero"> </hero-detail>
            `,
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})


export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[]; //Lista de heroes
  selectedHero: Hero; //Heroi selecionado

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
}