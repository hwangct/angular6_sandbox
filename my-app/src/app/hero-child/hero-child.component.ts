import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnInit {

  @Input() message: string;

  @Output() messageEvent = new EventEmitter<string>();

  // Child message to send to parent
  childmsg: string = 'Hey Dad! This is an output and EventEmitter example';
  childmsg2: string = 'Hey Dad...This is an AfterViewInit example';
  msg: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(msg => this.msg = msg);
  }

  // calls emit on this event with the message we want to send
  sendMessage() {
    this.messageEvent.emit(this.childmsg);
  }

  // broadcast to all other components
  newMessage() {
    this.data.changeMessage('Hello from Sibling with Observable example');
  }

}
