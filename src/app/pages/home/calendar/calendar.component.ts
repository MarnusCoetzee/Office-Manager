import { Subscription } from 'rxjs';
import { CreateMeetingDialogComponent } from './../../office/pages/meetings/dialogs/create-meeting-dialog/create-meeting-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import timeGridPlugin from '@fullcalendar/timegrid';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin],
    initialView: 'timeGridWeek',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'event 1', date: '2020-04-01' },
      { title: 'event 2', date: '2020-04-02' },
    ],
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }
  constructor(private dialogRef: MatDialog) {}

  ngOnInit(): void {}
}
