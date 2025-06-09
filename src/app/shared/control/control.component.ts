import { afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, inject, input, Input, signal, ViewEncapsulation } from '@angular/core';

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

  //         #input is a template variable used wherever this component is used
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement> | ElementRef<HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor() {
    // they in the entire application context, not just in this component
    afterRender(() => {
      console.log("After render:", this.el.nativeElement); // loggs after every render cycle in the whole app
    });

    afterNextRender(() => {
      console.log("After next render:", this.el.nativeElement); // loggs only once after the first render cycle in the whole app
    });
  }

  // listner for click events on host element
  onClick() {
    console.log('Control clicked:', this.el);

    console.log('Control content:', this.control());
  }
}
