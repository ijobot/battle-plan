import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeButtonsComponent } from './theme-buttons.component';

describe('ThemeButtonsComponent', () => {
  let component: ThemeButtonsComponent;
  let fixture: ComponentFixture<ThemeButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
