import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAndIconsComponent } from './card-and-icons.component';

describe('CardAndIconsComponent', () => {
  let component: CardAndIconsComponent;
  let fixture: ComponentFixture<CardAndIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAndIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAndIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
