import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMeetingsDialogComponent } from './view-meetings-dialog.component';

describe('ViewMeetingsDialogComponent', () => {
  let component: ViewMeetingsDialogComponent;
  let fixture: ComponentFixture<ViewMeetingsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMeetingsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMeetingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
