import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private cookies: CookieService) {}

  private user = new BehaviorSubject<string>(this.cookies.check('user') ? this.cookies.get('user') : '');
  currentUser = this.user.asObservable();

  private rides = new BehaviorSubject<string>(this.cookies.check('userData') ? JSON.parse(this.cookies.get('userData')).rides : '');
  currentRides = this.rides.asObservable();

  changeUser(data: string) {
    this.user.next(data);
  }

  updateRides(data: string) {
    this.rides.next(data);
  }
}
