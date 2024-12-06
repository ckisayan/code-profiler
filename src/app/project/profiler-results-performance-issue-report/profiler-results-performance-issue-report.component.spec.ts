import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerResultsPerformanceIssueReportComponent } from './profiler-results-performance-issue-report.component';

describe('ProfilerResultsPerformanceIssueReportComponent', () => {
  let component: ProfilerResultsPerformanceIssueReportComponent;
  let fixture: ComponentFixture<ProfilerResultsPerformanceIssueReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerResultsPerformanceIssueReportComponent]
    });
    fixture = TestBed.createComponent(ProfilerResultsPerformanceIssueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
