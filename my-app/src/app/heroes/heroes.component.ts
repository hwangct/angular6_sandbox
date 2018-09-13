import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { DataService } from '../data.service';
import { HeroChildComponent } from '../hero-child/hero-child.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  parentmsg = 'Son, this is an Input example';
  parentmsg2: string;
  parentmsg3: string;
  msg: string;

  constructor(private heroService: HeroService, private data: DataService) { }

  // Child Component
  @ViewChild(HeroChildComponent) child;

  ngOnInit() {
    this.getHeroes();
    this.data.currentMessage.subscribe(msg => this.msg = msg);
  }

  ngAfterViewInit() {
    this.parentmsg3 = this.child.childmsg2;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  receiveMessage($event) {
    this.parentmsg2 = $event;
  }
}
