import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreditCardCompaniesInstitutionsComponent } from './add-credit-card-companies-institutions.component';

describe('AddCreditCardCompaniesInstitutionsComponent', () => {
  let component: AddCreditCardCompaniesInstitutionsComponent;
  let fixture: ComponentFixture<AddCreditCardCompaniesInstitutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCreditCardCompaniesInstitutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCreditCardCompaniesInstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
