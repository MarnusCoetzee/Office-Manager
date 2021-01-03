import { Component, Input, OnInit } from '@angular/core';
import { Visitor } from '@app/models/backend';

@Component({
  selector: 'app-visitor-card',
  templateUrl: './visitor-card.component.html',
  styleUrls: ['./visitor-card.component.scss'],
})
export class VisitorCardComponent implements OnInit {
  @Input() visitor: Visitor;
  constructor() {}

  ngOnInit(): void {}
}
