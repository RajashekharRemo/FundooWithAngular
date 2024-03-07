import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesiconsComponent } from './notesicons.component';

describe('NotesiconsComponent', () => {
  let component: NotesiconsComponent;
  let fixture: ComponentFixture<NotesiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesiconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
