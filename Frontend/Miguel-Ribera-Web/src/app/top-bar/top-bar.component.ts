import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

var menuIcons = ['list', 'x'];
var dropdownDisplays = ['hidden', 'block'];
@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css',
})
export class TopBarComponent {

  icon = menuIcons[0];
  dropdownMenuDisplay = dropdownDisplays[0];

  changeMenu() {
  this.icon = this.icon == menuIcons[0] ? menuIcons[1] : menuIcons[0];
    this.dropdownMenuDisplay =
      this.dropdownMenuDisplay == dropdownDisplays[0]
        ? dropdownDisplays[1]
        : dropdownDisplays[0];
  }
}
