import { Component,OnInit   } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-profiler-configuration',
  templateUrl: './profiler-configuration.component.html',
  styleUrls: ['./profiler-configuration.component.css']
})
export class ProfilerConfigurationComponent  implements OnInit  {
  codeDecompositionSelected: boolean = false;
  extractBusinessLogicSelected: boolean = false;
  identifyBusinessProcessesSelected: boolean = false;
  identifySecurityAndPerformanceIssuesSelected: boolean = false;
  identifyIntegrationPointSelected: boolean = false;
  databaseAnalysisSelected: boolean = false;
  codeCompatibilitySelected: boolean = false;
  ngOnInit(){
    console.log("starting profiler config component...");
  }
  constructor(private location: Location) {}
  goBack(): void {
    this.location.back(); // This will take the user back to the previous page
  }
}
