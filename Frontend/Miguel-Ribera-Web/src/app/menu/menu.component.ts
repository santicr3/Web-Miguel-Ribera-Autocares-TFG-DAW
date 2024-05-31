import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgIf } from '@angular/common';
import { LanguageDropdownComponent } from '../language-dropdown/language-dropdown.component';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgIf, LanguageDropdownComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  @Input() display!: string;
  @Input() itemClasses = '';
  @Output() closeMenu = new EventEmitter<void>();
  showLanguage = false;
  currentFlag = 'gb';
  language!: string;
  data: any;
  texts: any;
  user!: string;
  constructor(
    private userService: UserService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.userService.currentUser.subscribe((value) => {
      this.user = value;
    });
    this.setTranslations();
  }

  setTranslations() {
    this.languageService.currentLanguage.subscribe((value) => {
      this.language = value;

      switch (value) {
        case 'spanish':
          this.currentFlag = 'es';
          break;
        case 'english':
          this.currentFlag = 'gb';
          break;
        case 'catalan':
            this.currentFlag = 'es-ct';
            break;
        default:
          this.currentFlag = 'es';
          break;
      }
      if (this.data) {
        
        if (this.data) {
          this.texts = this.data[this.language];
        }
      }
    });

    this.languageService.getJSON().subscribe((data) => {
      this.data = data.topBar;
      if (this.data) {
        this.texts = this.data[this.language];
      }
    });
  }

  languageButtonClick() {
    this.showLanguage = !this.showLanguage;
  }

  hideMenu() {
    this.showLanguage = false;
    this.closeMenu.emit();
  }
}
