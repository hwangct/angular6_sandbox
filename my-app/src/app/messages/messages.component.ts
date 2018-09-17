import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  dateString: string;
  constructor(public messageService: MessageService) {
    let count = 0;
    setInterval(() => {
      count += 1;
      this.dateString = String(count);
    }, 1000);
   }

  ngOnInit() {
  }

}
