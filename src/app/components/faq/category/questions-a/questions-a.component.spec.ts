import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuestionsAComponent } from './questions-a.component';

describe('QuestionsAComponent', () => {
  let component: QuestionsAComponent;
  let fixture: ComponentFixture<QuestionsAComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
