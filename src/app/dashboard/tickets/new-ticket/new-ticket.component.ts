import { AfterViewInit, Component, ElementRef, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); // the signal way

  // @Output() add = new EventEmitter();
  add = output<{title: string, text: string}>();

  ngAfterViewInit(): void {
  //   console.log('After view INIT', this.form?.nativeElement);
  }

  ngOnInit(): void {
  //   console.log('On INIT', this.form?.nativeElement); // here the form is undefined, if it is declared with ViewChild decorator
  //   // console.log('On INIT', this.form()); // here the form is defined, if it is declared with viewChild signal
  }

  onSubmit(title: string, desc: string) {
    // console.dir(titleEl);

    // const enteredTitle = title;
    // const enteredDesc = desc;
    // console.log('New ticket title:', enteredTitle);

    this.add.emit({ title: title, text: desc });

    this.form?.nativeElement.reset();
  }
}
