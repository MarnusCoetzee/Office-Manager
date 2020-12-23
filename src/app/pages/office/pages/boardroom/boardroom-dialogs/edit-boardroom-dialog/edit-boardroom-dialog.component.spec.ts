import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoardroomDialogComponent } from './edit-boardroom-dialog.component';

describe('EditBoardroomDialogComponent', () => {
  let component: EditBoardroomDialogComponent;
  let fixture: ComponentFixture<EditBoardroomDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBoardroomDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBoardroomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
