import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BattlefieldControlsComponent } from './battlefield-controls.component';

describe('CombatantCreationMenuComponent', () => {
  let component: BattlefieldControlsComponent;
  let fixture: ComponentFixture<BattlefieldControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BattlefieldControlsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BattlefieldControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
