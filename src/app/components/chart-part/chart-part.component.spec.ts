import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPartComponent } from './chart-part.component';

describe('ChartPartComponent', () => {
  let component: ChartPartComponent;
  let fixture: ComponentFixture<ChartPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
