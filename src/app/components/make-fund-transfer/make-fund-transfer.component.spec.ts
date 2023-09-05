import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeFundTransferComponent } from './make-fund-transfer.component';

describe('MakeFundTransferComponent', () => {
  let component: MakeFundTransferComponent;
  let fixture: ComponentFixture<MakeFundTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeFundTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeFundTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
