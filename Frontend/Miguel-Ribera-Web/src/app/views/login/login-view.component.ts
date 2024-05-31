import { Component } from '@angular/core';
import { LoginComponent } from '../../login/login.component';
import { RegisterComponent } from '../../register/register.component';

@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [LoginComponent, RegisterComponent],
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.css'
})
export class LoginViewComponent { 
  haveAccount = true;

  changeHaveAccount(newValue: boolean){
    this.haveAccount = newValue;
  }
}
