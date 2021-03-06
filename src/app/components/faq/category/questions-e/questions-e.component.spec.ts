import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsEComponent } from './questions-e.component';

describe('QuestionsEComponent', () => {
  let component: QuestionsEComponent;
  let fixture: ComponentFixture<QuestionsEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
