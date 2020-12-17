import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOfficeDialogComponent } from './create-office-dialog.component';

describe('CreateOfficeDialogComponent', () => {
  let component: CreateOfficeDialogComponent;
  let fixture: ComponentFixture<CreateOfficeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOfficeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOfficeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
