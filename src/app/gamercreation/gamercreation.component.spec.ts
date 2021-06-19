import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamercreationComponent } from './gamercreation.component';

describe('GamercreationComponent', () => {
  let component: GamercreationComponent;
  let fixture: ComponentFixture<GamercreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamercreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamercreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
