import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsBComponent } from './questions-b.component';

describe('QuestionsBComponent', () => {
  let component: QuestionsBComponent;
  let fixture: ComponentFixture<QuestionsBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
