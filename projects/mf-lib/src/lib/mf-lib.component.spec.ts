import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfLibComponent } from './mf-lib.component';

describe('MfLibComponent', () => {
  let component: MfLibComponent;
  let fixture: ComponentFixture<MfLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
