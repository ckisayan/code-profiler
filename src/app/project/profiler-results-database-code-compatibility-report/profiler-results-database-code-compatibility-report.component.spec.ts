import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerResultsDatabaseCodeCompatibilityReportComponent } from './profiler-results-database-code-compatibility-report.component';

describe('ProfilerResultsDatabaseCodeCompatibilityReportComponent', () => {
  let component: ProfilerResultsDatabaseCodeCompatibilityReportComponent;
  let fixture: ComponentFixture<ProfilerResultsDatabaseCodeCompatibilityReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerResultsDatabaseCodeCompatibilityReportComponent]
    });
    fixture = TestBed.createComponent(ProfilerResultsDatabaseCodeCompatibilityReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
