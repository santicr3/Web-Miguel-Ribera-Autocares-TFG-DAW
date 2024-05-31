import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-radio-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './custom-radio-button.component.html',
  styleUrl: './custom-radio-button.component.css'
})
export class CustomRadioButtonComponent {
  @Input() ticketType!: string;
  @Input() isActive!: boolean
  @Output() clicked = new EventEmitter<void>;

  clickHandler(){
    this.clicked.emit();
  }
}
