import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-business-rules-results',
  templateUrl: './business-rules-results.component.html',
  styleUrls: ['./business-rules-results.component.css']
})
export class BusinessRulesResultsComponent implements OnInit  {


  constructor() {}

  ngOnInit() {
    console.log (" BusinessRulesResultsComponent triggered.")
  }
}
