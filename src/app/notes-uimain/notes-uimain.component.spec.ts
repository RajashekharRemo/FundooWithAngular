import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesUIMainComponent } from './notes-uimain.component';

describe('NotesUIMainComponent', () => {
  let component: NotesUIMainComponent;
  let fixture: ComponentFixture<NotesUIMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesUIMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesUIMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
