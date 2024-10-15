import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerResultsSnapshotComponent } from './profiler-results-snapshot.component';

describe('ProfilerResultsSnapshotComponent', () => {
  let component: ProfilerResultsSnapshotComponent;
  let fixture: ComponentFixture<ProfilerResultsSnapshotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerResultsSnapshotComponent]
    });
    fixture = TestBed.createComponent(ProfilerResultsSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
