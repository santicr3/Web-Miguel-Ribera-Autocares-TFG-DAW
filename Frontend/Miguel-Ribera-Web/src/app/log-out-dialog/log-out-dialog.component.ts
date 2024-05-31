import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-log-out-dialog',
  standalone: true,
  imports: [NgIf],
  templateUrl: './log-out-dialog.component.html',
  styleUrl: './log-out-dialog.component.css',
})
export class LogOutDialogComponent {

  @Output() closeDialog = new EventEmitter<boolean>;
  @Input() title!: string;
  @Input() confirm!: string;
  @Input() reject!: string;

  accept(){
    this.closeDialog.emit(true);
  }

  deny() {
    this.closeDialog.emit(false);
  }
}
