import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextBusDialogComponent } from './next-bus-dialog.component';

describe('NextBusDialogComponent', () => {
  let component: NextBusDialogComponent;
  let fixture: ComponentFixture<NextBusDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextBusDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextBusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
