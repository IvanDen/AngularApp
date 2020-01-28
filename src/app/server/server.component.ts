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
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServerStatus(): string {
    return this.serverStatus;
  }
  getColor(): string {
    return this.serverStatus === 'online' ? '#60ff60' : '#ff6d6d';
  }

}
