import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerResultsCodeReviewReportComponent } from './profiler-results-code-review-report.component';

describe('ProfilerResultsCodeReviewReportComponent', () => {
  let component: ProfilerResultsCodeReviewReportComponent;
  let fixture: ComponentFixture<ProfilerResultsCodeReviewReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerResultsCodeReviewReportComponent]
    });
    fixture = TestBed.createComponent(ProfilerResultsCodeReviewReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
