import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorControllerComponent } from './calculator-controller.component';

describe('CalculatorControllerComponent', () => {
  let component: CalculatorControllerComponent;
  let fixture: ComponentFixture<CalculatorControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorControllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
