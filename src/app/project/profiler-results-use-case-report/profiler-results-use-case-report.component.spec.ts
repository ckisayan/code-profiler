import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerResultsUseCaseReportComponent } from './profiler-results-use-case-report.component';

describe('ProfilerResultsUseCaseReportComponent', () => {
  let component: ProfilerResultsUseCaseReportComponent;
  let fixture: ComponentFixture<ProfilerResultsUseCaseReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerResultsUseCaseReportComponent]
    });
    fixture = TestBed.createComponent(ProfilerResultsUseCaseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
