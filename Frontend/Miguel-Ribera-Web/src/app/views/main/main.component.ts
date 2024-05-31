import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NextBussComponent } from '../../next-buss/next-buss.component';
import { MapComponent } from '../../map/map.component';
import { NextBusDialogComponent } from '../../next-bus-dialog/next-bus-dialog.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    NextBussComponent,
    MapComponent,
    NextBusDialogComponent,
    NgIf
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  showNextBusDialog = false;
}
