import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private http: HttpClient, private cookies: CookieService) {}

  
  private jsonUrl = '../assets/texts.json';

  private language = new BehaviorSubject<string>(this.cookies.check('language') ? this.cookies.get('language') : 'spanish');
  currentLanguage = this.language.asObservable();

  changeLanguage(data: string) {
    this.language.next(data);
    this.cookies.set('language', data)
  }


  getJSON(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
