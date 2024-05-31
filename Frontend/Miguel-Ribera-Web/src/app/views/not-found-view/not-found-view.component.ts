import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-not-found-view',
  standalone: true,
  imports: [],
  templateUrl: './not-found-view.component.html',
  styleUrl: './not-found-view.component.css'
})
export class NotFoundViewComponent {

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) {}

  data!: any;
  texts!: any;
  language!: string;

  ngOnInit(): void {
    this.setSubscriptions()
  }


  setSubscriptions() {
    this.languageService.getJSON().subscribe((data) => {
      this.data = data.notFound;
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
}
