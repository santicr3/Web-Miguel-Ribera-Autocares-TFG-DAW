import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { lock, unlock } from 'tua-body-scroll-lock';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-next-bus-dialog',
  standalone: true,
  imports: [],
  templateUrl: './next-bus-dialog.component.html',
  styleUrl: './next-bus-dialog.component.css',
})
export class NextBusDialogComponent {
  constructor(
    private router: Router,
    private languageService: LanguageService,
    private cookies: CookieService
  ) {}

  @Output() closeDialog = new EventEmitter<boolean>();
  targetElement = document.body;
  time = 15;

  data!: any;
  texts!: any
  language!: string;

  ngOnInit(): void {
    this.disableScroll();
    this.setSubscriptions()
  }

  setSubscriptions() {
    this.languageService.getJSON().subscribe((data) => {
      this.data = data.nextBusDialog;
      if (this.data) {
        this.texts = this.data[this.language];
      }
    });

    this.languageService.currentLanguage.subscribe((value) => {
      this.language = value;

      if (this.data) {
        this.texts = this.data[this.language];
      }
    });
  }

  close() {
    this.closeDialog.emit(false);
    this.enableScroll();
  }

  buyTicket() {
    this.close()

    if (this.cookies.check('user')) {
      this.router.navigate(['/checkout']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  disableScroll() {
    lock(this.targetElement);
  }
  enableScroll() {
    unlock(this.targetElement);
  }
}
