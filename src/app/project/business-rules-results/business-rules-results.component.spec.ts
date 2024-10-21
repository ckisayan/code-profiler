import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRulesResultsComponent } from './business-rules-results.component';

describe('BusinessRulesResultsComponent', () => {
  let component: BusinessRulesResultsComponent;
  let fixture: ComponentFixture<BusinessRulesResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessRulesResultsComponent]
    });
    fixture = TestBed.createComponent(BusinessRulesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
