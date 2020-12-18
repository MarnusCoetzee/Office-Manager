import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Office } from '../home/store/offices';
@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss'],
})
export class OfficeComponent implements OnInit {
  loading$: Observable<boolean>;
  office$: Observable<Office>;
  staff$: Observable<any>;
  officeId: string;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.officeId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.officeId);
  }
}
