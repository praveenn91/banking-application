import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardCompaniesComponent } from './credit-card-companies.component';

describe('CreditCardCompaniesComponent', () => {
  let component: CreditCardCompaniesComponent;
  let fixture: ComponentFixture<CreditCardCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardCompaniesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditCardCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
