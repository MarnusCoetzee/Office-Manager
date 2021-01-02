import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSpinnerComponent } from './home-spinner.component';

describe('HomeSpinnerComponent', () => {
  let component: HomeSpinnerComponent;
  let fixture: ComponentFixture<HomeSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
