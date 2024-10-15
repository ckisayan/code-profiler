import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerResultsKnowledgeGraphComponent } from './profiler-results-knowledge-graph.component';

describe('ProfilerResultsKnowledgeGraphComponent', () => {
  let component: ProfilerResultsKnowledgeGraphComponent;
  let fixture: ComponentFixture<ProfilerResultsKnowledgeGraphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerResultsKnowledgeGraphComponent]
    });
    fixture = TestBed.createComponent(ProfilerResultsKnowledgeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
