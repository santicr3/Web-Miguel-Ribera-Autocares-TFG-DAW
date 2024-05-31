import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateServiceViewComponent } from './private-service-view.component';

describe('PrivateServiceViewComponent', () => {
  let component: PrivateServiceViewComponent;
  let fixture: ComponentFixture<PrivateServiceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateServiceViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivateServiceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
