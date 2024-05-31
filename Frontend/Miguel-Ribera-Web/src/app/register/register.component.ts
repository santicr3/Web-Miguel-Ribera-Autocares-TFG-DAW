import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, NgClass, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(
    private cookies: CookieService,
    private userService: UserService,
    private router: Router,
    private languageService: LanguageService
  ) {}

  @Output() haveAccount = new EventEmitter<boolean>();

  email = '';
  password = '';
  repeatedPassword = '';
  dni = '';
  visible = false;

  language!: string;
  texts!: any;
  data!: any;

  errorMessage!: string;
  errorCode!: number;

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
      this.data = data.register;
      if (this.data) {
        this.texts = this.data[this.language];
      }
    });
  }

  changeHaveAccount() {
    this.haveAccount.emit(true);
  }

  validateEmailInput(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validatePasswordInput(password: string) {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  validateDni(dni: string) {
    if (dni.length !== 9) {
      return false;
    }

    const validLetters = 'TRWAGMYFPDXBNJZSQVHLCKE';

    const number = parseInt(dni.slice(0, 8), 10);
    const dniLetter = dni.charAt(8);

    return dniLetter === validLetters.charAt(number % 23);
  }

  register() {
    fetch('https://miguel-ribera-backend-firebase.onrender.com/users/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.email,
        password: this.password,
        dni: this.dni,
        rides: '0',
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return false;
        }
      })
      .then((res) => {

        res.user.id = res.id;
        this.cookies.set('userData', JSON.stringify(res.user));

        this.cookies.set('user', this.email);
        this.userService.changeUser(this.email);
        this.router.navigate(['/']);

        this.errorCode = 0;
        this.errorMessage = ''
      });
  }

  checkData() {
    if (!this.validateEmailInput(this.email)) {
      this.errorMessage = this.texts?.notValidEmail;
      this.errorCode = 1;
    } else if (!this.validateDni(this.dni)) {
      this.errorMessage = this.texts?.notValidDni;
      this.errorCode = 2;
    } else if (!this.validatePasswordInput(this.password)) {
      this.errorMessage = this.texts?.notValidPassword; // to fix
      this.errorCode = 3;
    } else if (!(this.password === this.repeatedPassword)) {
      this.errorMessage = this.texts?.notValidRepeatedPassword;
      this.errorCode = 4;
    } else {
      this.register();
    }
  }

  changePasswordVisibility() {
    this.visible = !this.visible;
  }
}
