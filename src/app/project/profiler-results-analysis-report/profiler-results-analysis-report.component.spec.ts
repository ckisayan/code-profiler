import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerResultsAnalysisReportComponent } from './profiler-results-analysis-report.component';

describe('ProfilerResultsAnalysisReportComponent', () => {
  let component: ProfilerResultsAnalysisReportComponent;
  let fixture: ComponentFixture<ProfilerResultsAnalysisReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerResultsAnalysisReportComponent]
    });
    fixture = TestBed.createComponent(ProfilerResultsAnalysisReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
