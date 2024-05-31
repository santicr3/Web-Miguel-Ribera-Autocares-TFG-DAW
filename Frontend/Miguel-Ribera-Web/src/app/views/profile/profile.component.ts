import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { LogOutDialogComponent } from '../../log-out-dialog/log-out-dialog.component';
import { NgIf } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from '../../services/language.service';
import { NgxQrcodeStylingModule, Options } from 'ngx-qrcode-styling';
import { environment } from '../../../environments/environments';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [LogOutDialogComponent, NgIf, NgxQrcodeStylingModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  constructor(
    private userService: UserService,
    private cookies: CookieService,
    private router: Router,
    private languageService: LanguageService
  ) {}

  language!: string;
  texts!: any;
  data!: any;

  user!: string;
  userData!: any;
  dni!: string;
  rides!: string;

  showLogOutDialog = false;
  showDeleteAccountDialog = false;
  dialogLogOutTitle!: string;
  dialogDeleteAccountTitle!: string;

  public config!: Options;

  ngOnInit(): void {

    this.userService.currentRides.subscribe((value) => {
      if (value != '') {
        this.rides = value;
      }
    });

    this.userData = JSON.parse(this.cookies.get('userData'));
    this.dni = this.userData.dni;

    this.userService.currentUser.subscribe((value) => {
      if (value != '') {
        this.user = value;

        this.config = {
          width: 300,
          height: 300,
          data: `https://${environment.url}/comprobar-tiquet?user=${this.userData.id}`,
          image: '../../../assets/logo.png',
          margin: 5,
          dotsOptions: {
            color: '#1977f3',
            type: 'dots',
          },
          backgroundOptions: {
            color: '#ffffff',
          },
          imageOptions: {
            crossOrigin: 'anonymous',
            margin: 0,
          },
        };
      }
    });

    this.setSubscriptions();

    fetch('https://miguel-ribera-backend-firebase.onrender.com/users/rides', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: this.user.toLowerCase() }),
    })
      .then((res) => res.json())
      .then((res) => {
        var temporalData = JSON.parse(this.cookies.get('userData'));

        this.rides = res.rides;
        temporalData.rides = res.rides;
        this.cookies.set('userData', JSON.stringify(temporalData));
      });
  }

  setSubscriptions() {
    this.languageService.getJSON().subscribe((data) => {
      this.data = data.profile;
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

  closeDialog(value: boolean) {
    if (this.showLogOutDialog) {
      if (value) {
        this.logOut();
      }
    } else if (this.showDeleteAccountDialog) {
      if (value) {
        this.deleteAccount();
      }
    }
    this.showLogOutDialog = false;
    this.showDeleteAccountDialog = false;
  }

  logOut() {
    this.userService.changeUser('');
    this.cookies.delete('user');
    this.router.navigate(['/']);
  }

  deleteAccount() {
    fetch(
      `https://miguel-ribera-backend-firebase.onrender.com/users/delete/${this.userData.id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        this.cookies.deleteAll();
        this.userService.changeUser('');
        this.languageService.changeLanguage('spanish');
        this.router.navigate(['/']);
      });
  }
}
