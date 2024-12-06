import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerResultsProcessMapReportComponent } from './profiler-results-process-map-report.component';

describe('ProfilerResultsProcessMapReportComponent', () => {
  let component: ProfilerResultsProcessMapReportComponent;
  let fixture: ComponentFixture<ProfilerResultsProcessMapReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerResultsProcessMapReportComponent]
    });
    fixture = TestBed.createComponent(ProfilerResultsProcessMapReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
