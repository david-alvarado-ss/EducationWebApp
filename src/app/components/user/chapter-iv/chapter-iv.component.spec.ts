import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterIvComponent } from './chapter-iv.component';

describe('ChapterIvComponent', () => {
  let component: ChapterIvComponent;
  let fixture: ComponentFixture<ChapterIvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterIvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
