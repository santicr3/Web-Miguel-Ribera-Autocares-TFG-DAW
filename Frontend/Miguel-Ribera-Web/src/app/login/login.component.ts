import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environments';
import * as crypto from 'crypto-js';
import { UserService } from '../services/user.service';
import { LanguageService } from '../services/language.service';

document.onkeydown = function () {
  window;
};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgClass, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    private router: Router,
    private cookies: CookieService,
    private userService: UserService,
    private languageService: LanguageService
  ) {}

  @Output() haveAccount = new EventEmitter<boolean>();

  language = 'spanish';
  texts!: any;
  data!: any;

  email = '';
  password = '';
  visible = false;

  style = '';

  ngOnInit() {
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
      this.data = data.login;
      if (this.data) {
        this.texts = this.data[this.language];
      }
    });
  }

  changeHaveAccount() {
    this.haveAccount.emit(false);
  }

  checkData(email: string, password: string) {
    var secretKey = environment.cryptoKey;

    var data = {
      email: email.toLowerCase(),
      password: crypto.AES.encrypt(password, secretKey).toString(),
    };
    fetch('https://miguel-ribera-backend-firebase.onrender.com/users/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        switch (res.status) {
          case 200:
            return res.json();
          case 404:
            return 'Not Found';
          default:
            return res.status;
        }
      })
      .then((res) => {
        if (res.state === true) {
          res.user.id = res.id;
          this.cookies.set('userData', JSON.stringify(res.user));

          this.cookies.set('user', this.email);
          this.userService.changeUser(this.email);
          this.router.navigate(['/']);
        } else {
          this.email = '';
          this.password = '';
          this.style = 'border-red-500';
        }
      });
  }

  changePasswordVisibility() {
    this.visible = !this.visible;
  }
}
