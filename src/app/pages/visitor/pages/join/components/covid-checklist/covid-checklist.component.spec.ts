import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidChecklistComponent } from './covid-checklist.component';

describe('CovidChecklistComponent', () => {
  let component: CovidChecklistComponent;
  let fixture: ComponentFixture<CovidChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
