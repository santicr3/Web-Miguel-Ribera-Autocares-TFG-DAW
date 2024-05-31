import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LanguageService } from '../services/language.service';

interface LanguageSchema{
  flag: string,
  title: string,
  value: string
}

@Component({
  selector: 'app-language-dropdown',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './language-dropdown.component.html',
  styleUrl: './language-dropdown.component.css'
})
export class LanguageDropdownComponent {

  constructor(private languageService: LanguageService) {}

  @Input() languages!: Array<LanguageSchema>;
  @Input() show!: boolean;
  @Output() languageChange = new EventEmitter<boolean>();
  @Input() customClasses!: string;

  language!: string;

  changeLanguage(newLanguage: string){
    this.languageService.changeLanguage(newLanguage);
    this.languageChange.emit(false);
  }

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe((value) => (this.language = value));
  }
}
