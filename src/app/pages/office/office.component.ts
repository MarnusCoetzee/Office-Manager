import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Office } from '../home/store/offices';
import * as fromRoot from '@app/store';
import * as fromOffices from '../../pages/home/store/offices';
import * as fromUser from '@app/store/user';
@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss'],
})
export class OfficeComponent implements OnInit {
  loading$: Observable<boolean>;
  offices$: Observable<Office[]>;
  office$: Observable<Office>;
  staff$: Observable<any>;
  officeId: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<fromOffices.OfficesState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.officeId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.officeId);
    this.store.dispatch(new fromOffices.Read());
    this.offices$ = this.store.select(fromOffices.selectAll);
    this.office$ = this.store.pipe(
      select(fromOffices.selectEntityById, { id: this.officeId })
    );
    this.loading$ = this.store.pipe(select(fromUser.getLoading));
  }

  onClickNavigateBack() {
    this.router.navigate(['home']);
  }
}
