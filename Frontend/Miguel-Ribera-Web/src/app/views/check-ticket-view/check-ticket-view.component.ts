import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from '../../services/language.service';
import { UnauthorizedComponent } from '../../unauthorized/unauthorized.component';

@Component({
  selector: 'app-check-ticket-view',
  standalone: true,
  templateUrl: './check-ticket-view.component.html',
  styleUrl: './check-ticket-view.component.css',
  imports: [NgIf, UnauthorizedComponent],
})
export class CheckTicketViewComponent {
  constructor(
    private route: ActivatedRoute,
    private cookies: CookieService,
    private languageService: LanguageService
  ) {}

  user!: string;
  clientUser!: string;
  solved = false;
  state = false;

  language!: string;
  texts!: any;
  data!: any;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.clientUser = params['user'];
    });

    this.user = this.cookies.get('user');

    if (this.user === 'admin') {
      fetch(
        `https://miguel-ribera-backend-firebase.onrender.com/users/${this.clientUser}`
      )
        .then((res) => res.json())
        .then((res) => {
          var temporalData = JSON.parse(this.cookies.get('userData'));
          if (res.rides - 1 >= 0) {
            fetch(
              `https://miguel-ribera-backend-firebase.onrender.com/users/update/${this.clientUser}`,
              {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ rides: res.rides - 1 }),
              }
            )
              .then((res) => {
                if (res.status === 200) {
                  return res.json();
                } else {
                  return 'error';
                }
              })
              .then((res) => {
                this.solved = true;
                this.state = true;
              })
              .catch((res) => {
                this.solved = true;
                this.state = false;
              });
          } else {
            this.solved = true;
            this.state = false;
          }
        })
        .catch((res) => {
          this.solved = true;
          this.state = false;
        });
    }

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
      this.data = data.checkTicket;
      if (this.data) {
        this.texts = this.data[this.language];
      }
    });
  }
}
