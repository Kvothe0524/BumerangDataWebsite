import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsCComponent } from './questions-c.component';

describe('QuestionsCComponent', () => {
  let component: QuestionsCComponent;
  let fixture: ComponentFixture<QuestionsCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
