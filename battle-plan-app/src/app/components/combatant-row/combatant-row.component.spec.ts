import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatantRowComponent } from './combatant-row.component';

describe('CombatantRowComponent', () => {
  let component: CombatantRowComponent;
  let fixture: ComponentFixture<CombatantRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombatantRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombatantRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
