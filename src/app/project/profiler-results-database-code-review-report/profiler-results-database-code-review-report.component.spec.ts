import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerResultsDatabaseCodeReviewReportComponent } from './profiler-results-database-code-review-report.component';

describe('ProfilerResultsDatabaseCodeReviewReportComponent', () => {
  let component: ProfilerResultsDatabaseCodeReviewReportComponent;
  let fixture: ComponentFixture<ProfilerResultsDatabaseCodeReviewReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerResultsDatabaseCodeReviewReportComponent]
    });
    fixture = TestBed.createComponent(ProfilerResultsDatabaseCodeReviewReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
