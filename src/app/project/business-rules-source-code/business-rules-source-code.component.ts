
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  
  selector: 'app-business-rules-source-code',
  templateUrl: './business-rules-source-code.component.html',
  styleUrls: ['./business-rules-source-code.component.css']
})
export class BusinessRulesSourceCodeComponent implements OnInit  {
  csharpCode: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('assets/ComplianceRules.cs', { responseType: 'text' })
      .subscribe(data => {
        this.csharpCode = data;
      });
  }
}