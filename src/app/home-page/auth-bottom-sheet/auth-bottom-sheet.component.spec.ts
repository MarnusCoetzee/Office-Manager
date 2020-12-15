import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBottomSheetComponent } from './auth-bottom-sheet.component';

describe('AuthBottomSheetComponent', () => {
  let component: AuthBottomSheetComponent;
  let fixture: ComponentFixture<AuthBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthBottomSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
