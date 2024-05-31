import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTicketViewComponent } from './check-ticket-view.component';

describe('CheckTicketViewComponent', () => {
  let component: CheckTicketViewComponent;
  let fixture: ComponentFixture<CheckTicketViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckTicketViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckTicketViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
