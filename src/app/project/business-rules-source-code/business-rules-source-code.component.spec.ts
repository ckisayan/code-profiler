import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRulesSourceCodeComponent } from './business-rules-source-code.component';

describe('BusinessRulesSourceCodeComponent', () => {
  let component: BusinessRulesSourceCodeComponent;
  let fixture: ComponentFixture<BusinessRulesSourceCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessRulesSourceCodeComponent]
    });
    fixture = TestBed.createComponent(BusinessRulesSourceCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
