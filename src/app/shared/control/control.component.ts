import { Component, ElementRef, HostBinding, inject, input, Input, signal, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // global styles
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  // @Input({ required: true }) label!: string;
  label = input.required<string>();

  private el = inject(ElementRef); // prgrammatically access the host element

  // listner for click events on host element
  onClick() {
    console.log('Control clicked:', this.el);

  }
}
