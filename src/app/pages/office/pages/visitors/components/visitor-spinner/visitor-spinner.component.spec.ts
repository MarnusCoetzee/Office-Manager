import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorSpinnerComponent } from './visitor-spinner.component';

describe('VisitorSpinnerComponent', () => {
  let component: VisitorSpinnerComponent;
  let fixture: ComponentFixture<VisitorSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
