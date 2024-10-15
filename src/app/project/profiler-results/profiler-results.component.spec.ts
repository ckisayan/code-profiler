import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerResultsComponent } from './profiler-results.component';

describe('ProfilerResultsComponent', () => {
  let component: ProfilerResultsComponent;
  let fixture: ComponentFixture<ProfilerResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerResultsComponent]
    });
    fixture = TestBed.createComponent(ProfilerResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
