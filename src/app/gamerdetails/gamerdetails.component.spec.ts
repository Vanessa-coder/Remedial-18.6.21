import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerdetailsComponent } from './gamerdetails.component';

describe('GamerdetailsComponent', () => {
  let component: GamerdetailsComponent;
  let fixture: ComponentFixture<GamerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamerdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
