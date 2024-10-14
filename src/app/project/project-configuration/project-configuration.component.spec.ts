import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectConfigurationComponent } from './project-configuration.component';

describe('ProjectConfigurationComponent', () => {
  let component: ProjectConfigurationComponent;
  let fixture: ComponentFixture<ProjectConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectConfigurationComponent]
    });
    fixture = TestBed.createComponent(ProjectConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
