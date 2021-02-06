import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuestionsDComponent } from './questions-d.component';

describe('QuestionsDComponent', () => {
  let component: QuestionsDComponent;
  let fixture: ComponentFixture<QuestionsDComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
