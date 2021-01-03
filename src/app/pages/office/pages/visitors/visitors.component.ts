import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Visitor } from '@app/models/backend/visitor';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';
import * as fromList from './store/visitor-list';
import { select, Store } from '@ngrx/store';
@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.scss'],
})
export class VisitorsComponent implements OnInit {
  officeId: string;
  visitors$: Observable<Visitor[]>;
  loading$: Observable<boolean>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit(): void {
    this.officeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.visitors$ = this.store.pipe(select(fromList.selectAll));
    this.loading$ = this.store.pipe(select(fromList.getLoading));
    this.store.dispatch(new fromList.Read(this.officeId));
  }
}
