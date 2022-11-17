import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCryptoFieldComponent } from './single-crypto-field.component';

describe('SingleCryptoFieldComponent', () => {
  let component: SingleCryptoFieldComponent;
  let fixture: ComponentFixture<SingleCryptoFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCryptoFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCryptoFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
