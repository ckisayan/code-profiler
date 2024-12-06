import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerResultsDatabaseCodeAnalysisSnapshotComponent } from './profiler-results-database-code-analysis-snapshot.component';

describe('ProfilerResultsDatabaseCodeAnalysisSnapshotComponent', () => {
  let component: ProfilerResultsDatabaseCodeAnalysisSnapshotComponent;
  let fixture: ComponentFixture<ProfilerResultsDatabaseCodeAnalysisSnapshotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerResultsDatabaseCodeAnalysisSnapshotComponent]
    });
    fixture = TestBed.createComponent(ProfilerResultsDatabaseCodeAnalysisSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
