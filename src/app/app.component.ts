import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
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
              <div *ngIf="selectedHero">
                <h2>{{selectedHero.name}} details!</h2>
                <div><label>id: </label>{{selectedHero.id}}</div>
                <div>
                  <label>name: </label>
                  <input [(ngModel)]="selectedHero.name" placeholder="name"/>
                </div>
              </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
}

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 1, name:  'Emanuel' },
  { id: 2, name:  'Viviane' },
  { id: 3, name:  'Dudu' },
  { id: 4, name:  'Mainha' },
  { id: 5, name:  'Cocada' },
  { id: 6, name:  'Larinha' },
  { id: 7, name:  'Davi' },
  { id: 8, name:  'Mandioca' },
  { id: 9, name:  'Amendoim' },
  { id: 10, name: 'Tamarino' }
];

