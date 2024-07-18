import { TestBed } from '@angular/core/testing';

import { CombatantService } from './combatant.service';

describe('CombatantService', () => {
  let service: CombatantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombatantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
