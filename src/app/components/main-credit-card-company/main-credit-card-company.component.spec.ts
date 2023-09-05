import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCreditCardCompanyComponent } from './main-credit-card-company.component';

describe('MainCreditCardCompanyComponent', () => {
  let component: MainCreditCardCompanyComponent;
  let fixture: ComponentFixture<MainCreditCardCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCreditCardCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCreditCardCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
