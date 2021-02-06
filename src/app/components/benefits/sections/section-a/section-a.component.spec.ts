import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionAComponent } from './section-a.component';

describe('SectionAComponent', () => {
  let component: SectionAComponent;
  let fixture: ComponentFixture<SectionAComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
