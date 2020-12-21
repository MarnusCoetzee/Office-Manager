import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeQrCodeDialogComponent } from './office-qr-code-dialog.component';

describe('OfficeQrCodeDialogComponent', () => {
  let component: OfficeQrCodeDialogComponent;
  let fixture: ComponentFixture<OfficeQrCodeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeQrCodeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeQrCodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
