import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteNewContainerComponent } from './note-new-container.component';

describe('NoteNewContainerComponent', () => {
  let component: NoteNewContainerComponent;
  let fixture: ComponentFixture<NoteNewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteNewContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteNewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
