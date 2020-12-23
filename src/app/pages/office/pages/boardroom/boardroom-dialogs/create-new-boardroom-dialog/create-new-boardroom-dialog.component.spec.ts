import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewBoardroomDialogComponent } from './create-new-boardroom-dialog.component';

describe('CreateNewBoardroomDialogComponent', () => {
  let component: CreateNewBoardroomDialogComponent;
  let fixture: ComponentFixture<CreateNewBoardroomDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewBoardroomDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewBoardroomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
