import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffLoadingComponent } from './staff-loading.component';

describe('StaffLoadingComponent', () => {
  let component: StaffLoadingComponent;
  let fixture: ComponentFixture<StaffLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
