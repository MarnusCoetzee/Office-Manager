import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardroomLoadingComponent } from './boardroom-loading.component';

describe('BoardroomLoadingComponent', () => {
  let component: BoardroomLoadingComponent;
  let fixture: ComponentFixture<BoardroomLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardroomLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardroomLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
