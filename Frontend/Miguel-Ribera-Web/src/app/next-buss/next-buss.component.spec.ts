import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextBussComponent } from './next-buss.component';

describe('NextBussComponent', () => {
  let component: NextBussComponent;
  let fixture: ComponentFixture<NextBussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextBussComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NextBussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
