import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithDrawalComponent } from './with-drawal.component';

describe('WithDrawalComponent', () => {
  let component: WithDrawalComponent;
  let fixture: ComponentFixture<WithDrawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithDrawalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithDrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
