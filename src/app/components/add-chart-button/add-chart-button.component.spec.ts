import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChartButtonComponent } from './add-chart-button.component';

describe('AddChartButtonComponent', () => {
  let component: AddChartButtonComponent;
  let fixture: ComponentFixture<AddChartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChartButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
