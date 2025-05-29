import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {

  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() {
    setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.3) {
        this.currentStatus = 'offline';
      } else if (rnd < 0.6) {
        this.currentStatus = 'unknown';
      } else {
        this.currentStatus = 'online';
      }
    }, 5000)
  }
}
