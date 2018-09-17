import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hero-grandchild',
  templateUrl: './hero-grandchild.component.html',
  styleUrls: ['./hero-grandchild.component.css']
})
export class HeroGrandchildComponent implements OnInit {
  msg: string;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(msg => this.msg = msg);
  }
}
