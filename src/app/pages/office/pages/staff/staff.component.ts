import { Component, OnInit } from '@angular/core';
import { Staff } from '@app/models/backend/staff';
import { Observable } from 'rxjs';
import * as fromRoot from '@app/store';
import * as fromUser from '@app/store/user';
import * as fromList from './store/staff-list';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { CreateStaffDialogComponent } from './dialogs/create-staff-dialog/create-staff-dialog.component';
import { EditStaffDialogComponent } from './dialogs/edit-staff-dialog/edit-staff-dialog.component';
import { DeleteStaffDialogComponent } from './dialogs/delete-staff-dialog/delete-staff-dialog.component';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent implements OnInit {
  officeId: string;
  staff$: Observable<Staff[]>;
  loading$: Observable<boolean>;
  showFiltered = false;
  staff: Array<Staff>;
  filteredStaff: Array<Staff>;
  searchForm: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<fromRoot.State>,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.officeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.staff$ = this.store.pipe(select(fromList.selectAll));
    this.loading$ = this.store.pipe(select(fromList.getLoading));
    this.store.dispatch(new fromList.Read(this.officeId));
    this.initSearchForm();
    this.onChanges();
    this.staff$.subscribe((staffResult: Array<Staff>) => {
      this.staff = staffResult;
    });
  }

  private initSearchForm() {
    // form used for search input box
    this.searchForm = this.fb.group({
      searchString: '',
    });
  }

  /**
   * Function that filteres through employee names and shows result
   */
  onChanges(): void {
    this.searchForm.valueChanges.subscribe((value) => {
      // show different array results in html, use showFiltered with ngIf to switch between arrays
      // show filtered array if a search input has been detected
      if (value.searchString.length > 0) {
        // show filtered names
        this.showFiltered = true;
      }
      // show original array if the search input is cancelled
      if (value.searchString.length === 0) {
        // show unfiltered names
        this.showFiltered = false;
      }
      // filter employees array and return filtered employees
      this.filteredStaff = this.staff.filter((searchedEmployee) => {
        const employeeName =
          searchedEmployee.name + ' ' + searchedEmployee.surname;
        return employeeName
          .toLowerCase()
          .includes(value.searchString.toLowerCase());
      });
    });
  }

  onClickOpenNewStaffDialog() {
    const officeId = this.officeId;
    this.dialog.open(CreateStaffDialogComponent, {
      minWidth: '350px',
      minHeight: '350px',
      data: { officeId },
    });
  }

  onClickEditStaffDialog(staff: Staff) {
    this.dialog.open(EditStaffDialogComponent, {
      minWidth: '350px',
      minHeight: '350px',
      data: { staff },
    });
  }

  onClickDeleteStaffDialog(staff: Staff) {
    this.dialog.open(DeleteStaffDialogComponent, {
      minWidth: '350px',
      minHeight: '350px',
      data: { staff },
    });
  }
}
