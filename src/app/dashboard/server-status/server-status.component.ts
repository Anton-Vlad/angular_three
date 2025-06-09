import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit { // OnDestroy

  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline') // 'online';
  private intervalId?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor() {
    // here the signal does not setup a subscription to the value changes

    effect(() => {
      console.log('Current server status:', this.currentStatus()); // this way the signal is used, it sets up a subscription to the value changes
    })

    // Example of the effect with cleanup
    // effect((onCleanup) => {
    //   const tasks = getTasks();
    //   const timer = setTimeout(() => {
    //     console.log(`Current number of tasks: ${tasks().length}`);
    //   }, 1000);
    //   onCleanup(() => {
    //     clearTimeout(timer);
    //   });
    // });
  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.3) {
        // this.currentStatus = 'offline';
        this.currentStatus.set('offline');
      } else if (rnd < 0.6) {
        // this.currentStatus = 'unknown';
        this.currentStatus.set('unknown');
      } else {
        // this.currentStatus = 'online';
        this.currentStatus.set('online');
      }
    }, 5000)

    // Alternative to ngOnDestroy using DestroyRef
    this.destroyRef.onDestroy(() => {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    });
  }

  // ngOnDestroy(): void {
  //   if (this.intervalId) {
  //     clearInterval(this.intervalId);
  //   }
  // }
}
