import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAreaComponent } from './title-area.component';

describe('TitleAreaComponent', () => {
  let component: TitleAreaComponent;
  let fixture: ComponentFixture<TitleAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
