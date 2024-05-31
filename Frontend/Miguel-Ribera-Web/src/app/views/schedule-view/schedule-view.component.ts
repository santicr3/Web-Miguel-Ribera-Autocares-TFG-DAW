import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule-view',
  standalone: true,
  imports: [],
  templateUrl: './schedule-view.component.html',
  styleUrl: './schedule-view.component.css',
})
export class ScheduleViewComponent {
  selected = 'Estación - Playa';

  options = ['Estación - Playa', 'Playa - Estación'];

  changeSchedule(newValueID: any) {
    this.selected = this.options[newValueID];
  }
}
