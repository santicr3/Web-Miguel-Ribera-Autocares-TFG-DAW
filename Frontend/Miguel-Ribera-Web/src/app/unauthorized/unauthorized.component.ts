import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [],
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.css',
})
export class UnauthorizedComponent {
  constructor(private languageService: LanguageService, private router: Router, private cookies: CookieService) {}

  language!: string;
  texts!: any;
  data!: any;

  ngOnInit(): void {
    this.setSubscriptions();
  }

  setSubscriptions() {
    this.languageService.currentLanguage.subscribe((value) => {
      this.language = value;

      if (this.data) {
        this.texts = this.data[this.language];
      }
    });

    this.languageService.getJSON().subscribe((data) => {
      this.data = data.unauthorized;
      if (this.data) {
        this.texts = this.data[this.language];
      }
    });
  }
}
