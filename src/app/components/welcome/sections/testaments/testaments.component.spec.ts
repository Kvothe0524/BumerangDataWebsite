import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestamentsComponent } from './testaments.component';

describe('TestamentsComponent', () => {
  let component: TestamentsComponent;
  let fixture: ComponentFixture<TestamentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestamentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
