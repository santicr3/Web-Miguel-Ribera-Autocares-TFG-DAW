import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayOptionComponent } from './pay-option.component';

describe('PayOptionComponent', () => {
  let component: PayOptionComponent;
  let fixture: ComponentFixture<PayOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayOptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
