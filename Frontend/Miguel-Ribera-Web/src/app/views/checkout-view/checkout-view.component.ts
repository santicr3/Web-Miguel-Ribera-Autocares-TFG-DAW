import { Component } from '@angular/core';
import { PayOptionComponent } from '../../pay-option/pay-option.component';
import { UserService } from '../../services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { CustomRadioButtonComponent } from '../../custom-radio-button/custom-radio-button.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { UnauthorizedComponent } from '../../unauthorized/unauthorized.component';

@Component({
  selector: 'app-checkout-view',
  standalone: true,
  imports: [PayOptionComponent, CustomRadioButtonComponent, NgIf, FormsModule, UnauthorizedComponent],
  templateUrl: './checkout-view.component.html',
  styleUrl: './checkout-view.component.css',
})
export class CheckoutViewComponent {
  constructor(
    private userService: UserService,
    private cookies: CookieService,
    private router: Router,
    private languageService: LanguageService
  ) {}

  rides!: string;
  ticketType = true;
  price = parseFloat('1.50').toFixed(2);
  payOption = 'Paypal';

  cardNumber = '';
  cardOwner = '';
  expirationDate = '';
  cvv = '';

  errorCode = 0;
  errorMessage = '';

  language!: string;
  texts!: any;
  data!: any;

  ngOnInit(): void {
    this.userService.currentRides.subscribe((value) => {
      this.rides = value;
    });

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
      this.data = data.payOptions;
      if (this.data) {
        this.texts = this.data[this.language];
      }
    });
  }

  addRide() {
    this.userService.updateRides((parseInt(this.rides) + (this.ticketType ? 1 : 20)).toString());
    var tempData = JSON.parse(this.cookies.get('userData'));
    tempData['rides'] = this.rides;
    this.cookies.set('userData', JSON.stringify(tempData));

    fetch(`https://miguel-ribera-backend-firebase.onrender.com/users/update/${tempData['id']}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({ rides: this.rides })
    })
      .then((res) => {
        if (res.status === 200) {
          this.router.navigate(['/perfil'])
        }
      }
      );
  }

  toggleTicketType(){
    this.ticketType = !this.ticketType;
    this.price = this.ticketType ? parseFloat('1.50').toFixed(2) : parseFloat('22').toFixed(2)
  }

  changePayMethod(value: string){
    this.payOption = value
  }

  validateForm(){
    if (this.cardNumber.length !== 19) {
      this.errorCode = 1
      this.errorMessage = 'The card number is not valid';
    } else if (this.cardOwner.length <= 0){
      this.errorCode = 2
      this.errorMessage = "The card owner can't be null";
    }else if (!this.validateCVV()){
      this.errorCode = 3
      this.errorMessage = "The CVV is not valid";
    }
    else{
      this.errorCode = 0
      this.addRide();
    }
  }

  cardNumberStyle(){
    let value = this.cardNumber.replace(/\D/g, '');
            let formattedValue = '';
            for (let i = 0; i < value.length; i += 4) {
                if (i > 0) {
                    formattedValue += '-';
                }
                formattedValue += value.substring(i, i + 4);
            }
            this.cardNumber = formattedValue;
  }

  validateCVV(){
    const regex = /^\d{3}$/;
    return regex.test(this.cvv);
  }
}
