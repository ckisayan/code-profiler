import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerResultsComponentReportComponent } from './profiler-results-component-report.component';

describe('ProfilerResultsComponentReportComponent', () => {
  let component: ProfilerResultsComponentReportComponent;
  let fixture: ComponentFixture<ProfilerResultsComponentReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerResultsComponentReportComponent]
    });
    fixture = TestBed.createComponent(ProfilerResultsComponentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
