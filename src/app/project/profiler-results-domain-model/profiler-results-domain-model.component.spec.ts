import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerResultsDomainModelComponent } from './profiler-results-domain-model.component';

describe('ProfilerResultsDomainModelComponent', () => {
  let component: ProfilerResultsDomainModelComponent;
  let fixture: ComponentFixture<ProfilerResultsDomainModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerResultsDomainModelComponent]
    });
    fixture = TestBed.createComponent(ProfilerResultsDomainModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
