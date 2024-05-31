import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pay-option',
  standalone: true,
  imports: [NgIf],
  templateUrl: './pay-option.component.html',
  styleUrl: './pay-option.component.css',
})
export class PayOptionComponent {
  @Input() name!: string;
  @Input() color!: string;
  @Input() background!: string;

  @Input() activeMethod!: string;
  @Output() clicked = new EventEmitter<string>();

  clickHandler() {
    this.clicked.emit(this.name);
  }
}
