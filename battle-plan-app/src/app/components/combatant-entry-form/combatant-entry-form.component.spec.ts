import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatantEntryFormComponent } from './combatant-entry-form.component';

describe('CombatantEntryFormComponent', () => {
  let component: CombatantEntryFormComponent;
  let fixture: ComponentFixture<CombatantEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombatantEntryFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombatantEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
