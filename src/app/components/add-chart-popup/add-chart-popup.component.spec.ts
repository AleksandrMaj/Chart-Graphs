import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChartPopupComponent } from './add-chart-popup.component';

describe('AddChartPopupComponent', () => {
  let component: AddChartPopupComponent;
  let fixture: ComponentFixture<AddChartPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChartPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChartPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
