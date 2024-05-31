import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-private-service-view',
  standalone: true,
  imports: [],
  templateUrl: './private-service-view.component.html',
  styleUrl: './private-service-view.component.css'
})
export class PrivateServiceViewComponent {
  constructor(private languageService: LanguageService){}

  language!: string;
  texts!: any;
  data!:any;

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
      this.data = data.privateService;
      if (this.data) {
        this.texts = this.data[this.language];
      }

    });

  }
}
