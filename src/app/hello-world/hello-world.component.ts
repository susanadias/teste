import { Component, OnInit } from '@angular/core';
import { SignalrService } from '../signalr.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  constructor(private signalRService: SignalrService) {
    this.signalRService.initializeSignalRConnection()
    }

  ngOnInit(): void {
  }

}
