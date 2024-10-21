import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRulesExplainedComponent } from './business-rules-explained.component';

describe('BusinessRulesExplainedComponent', () => {
  let component: BusinessRulesExplainedComponent;
  let fixture: ComponentFixture<BusinessRulesExplainedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessRulesExplainedComponent]
    });
    fixture = TestBed.createComponent(BusinessRulesExplainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
