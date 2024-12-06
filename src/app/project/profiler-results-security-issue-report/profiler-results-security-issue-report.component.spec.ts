import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerResultsSecurityIssueReportComponent } from './profiler-results-security-issue-report.component';

describe('ProfilerResultsSecurityIssueReportComponent', () => {
  let component: ProfilerResultsSecurityIssueReportComponent;
  let fixture: ComponentFixture<ProfilerResultsSecurityIssueReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerResultsSecurityIssueReportComponent]
    });
    fixture = TestBed.createComponent(ProfilerResultsSecurityIssueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
