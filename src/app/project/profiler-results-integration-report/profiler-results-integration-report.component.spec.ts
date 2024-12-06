import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerResultsIntegrationReportComponent } from './profiler-results-integration-report.component';

describe('ProfilerResultsIntegrationReportComponent', () => {
  let component: ProfilerResultsIntegrationReportComponent;
  let fixture: ComponentFixture<ProfilerResultsIntegrationReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerResultsIntegrationReportComponent]
    });
    fixture = TestBed.createComponent(ProfilerResultsIntegrationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
