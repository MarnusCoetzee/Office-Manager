import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMeetingCalendarComponent } from './new-meeting-calendar.component';

describe('NewMeetingCalendarComponent', () => {
  let component: NewMeetingCalendarComponent;
  let fixture: ComponentFixture<NewMeetingCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMeetingCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMeetingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
