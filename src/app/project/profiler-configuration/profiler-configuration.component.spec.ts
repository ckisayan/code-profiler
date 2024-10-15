import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerConfigurationComponent } from './profiler-configuration.component';

describe('ProfilerConfigurationComponent', () => {
  let component: ProfilerConfigurationComponent;
  let fixture: ComponentFixture<ProfilerConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerConfigurationComponent]
    });
    fixture = TestBed.createComponent(ProfilerConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
