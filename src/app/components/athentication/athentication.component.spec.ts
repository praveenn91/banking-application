import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthenticationComponent } from './athentication.component';

describe('AthenticationComponent', () => {
  let component: AthenticationComponent;
  let fixture: ComponentFixture<AthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthenticationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
