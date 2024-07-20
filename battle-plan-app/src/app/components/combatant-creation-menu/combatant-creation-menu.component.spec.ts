import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatantCreationMenuComponent } from './combatant-creation-menu.component';

describe('CombatantCreationMenuComponent', () => {
  let component: CombatantCreationMenuComponent;
  let fixture: ComponentFixture<CombatantCreationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombatantCreationMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombatantCreationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
