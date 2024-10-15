import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerResultsUxReportComponent } from './profiler-results-ux-report.component';

describe('ProfilerResultsUxReportComponent', () => {
  let component: ProfilerResultsUxReportComponent;
  let fixture: ComponentFixture<ProfilerResultsUxReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerResultsUxReportComponent]
    });
    fixture = TestBed.createComponent(ProfilerResultsUxReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
