import { TestBed } from '@angular/core/testing';

import { BoardroomService } from './boardroom.service';

describe('BoardroomService', () => {
  let service: BoardroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
