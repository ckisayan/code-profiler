import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousProfilerResultsComponent } from './previous-profiler-results.component';

describe('PreviousProfilerResultsComponent', () => {
  let component: PreviousProfilerResultsComponent;
  let fixture: ComponentFixture<PreviousProfilerResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousProfilerResultsComponent]
    });
    fixture = TestBed.createComponent(PreviousProfilerResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
