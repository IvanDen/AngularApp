import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  private serverId: number;
  private serverStatus: string;

  constructor() {
    this.serverId = 10;
    this.serverStatus = 'offLine';
  }
  getServerStatus(): string {
    return this.serverStatus;
  }

}
