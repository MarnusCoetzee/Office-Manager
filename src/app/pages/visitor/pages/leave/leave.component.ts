import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeaveService } from './services/leave.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss'],
})
export class LeaveComponent implements OnInit {
  officeId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private leaveService: LeaveService
  ) {}

  ngOnInit(): void {
    this.officeId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  onClickLeave() {
    this.leaveService.onClickSignout();
  }
}
