import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBoardroomDialogComponent } from './delete-boardroom-dialog.component';

describe('DeleteBoardroomDialogComponent', () => {
  let component: DeleteBoardroomDialogComponent;
  let fixture: ComponentFixture<DeleteBoardroomDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBoardroomDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBoardroomDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
