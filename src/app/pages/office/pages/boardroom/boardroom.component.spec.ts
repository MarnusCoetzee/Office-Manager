import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardroomComponent } from './boardroom.component';

describe('BoardroomComponent', () => {
  let component: BoardroomComponent;
  let fixture: ComponentFixture<BoardroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
