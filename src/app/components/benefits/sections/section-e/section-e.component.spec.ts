import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionEComponent } from './section-e.component';

describe('SectionEComponent', () => {
  let component: SectionEComponent;
  let fixture: ComponentFixture<SectionEComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
