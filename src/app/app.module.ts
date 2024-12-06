import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './reports/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// Optional Ripple effect module
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { ProjectConfigurationComponent } from './project/project-configuration/project-configuration.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ProfilerConfigurationComponent } from './project/profiler-configuration/profiler-configuration.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProfilerResultsComponent } from './project/profiler-results/profiler-results.component';
import { ProfilerResultsSnapshotComponent } from './project/profiler-results-snapshot/profiler-results-snapshot.component';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ProfilerResultsComponentReportComponent } from './project/profiler-results-component-report/profiler-results-component-report.component';
import { ProfilerResultsUxReportComponent } from './project/profiler-results-ux-report/profiler-results-ux-report.component';
import { ProfilerResultsKnowledgeGraphComponent } from './project/profiler-results-knowledge-graph/profiler-results-knowledge-graph.component';
import { PreviousProfilerResultsComponent } from './project/previous-profiler-results/previous-profiler-results.component';
import { StarterComponent } from './starter/starter.component';
import { BusinessRulesResultsComponent } from './project/business-rules-results/business-rules-results.component';
import { HighlightPipe } from './highlight.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BusinessRulesSourceCodeComponent } from './project/business-rules-source-code/business-rules-source-code.component';
import { BusinessRulesExplainedComponent } from './project/business-rules-explained/business-rules-explained.component';
import { D3ChartComponent } from './d3-chart/d3-chart.component';
import { UxDiagramSampleComponent } from './d3-chart/ux-diagram-sample.component';
import {UxDiagramComponent} from './ux-diagram/ux-diagram.component';
import { ProfilerResultsDomainModelComponent } from './project/profiler-results-domain-model/profiler-results-domain-model.component';
import { ProfilerResultsAnalysisReportComponent } from './project/profiler-results-analysis-report/profiler-results-analysis-report.component';
import { ProfilerResultsCodeReviewReportComponent } from './project/profiler-results-code-review-report/profiler-results-code-review-report.component';
import { ProfilerResultsUseCaseReportComponent } from './project/profiler-results-use-case-report/profiler-results-use-case-report.component';
import { ProfilerResultsPerformanceIssueReportComponent } from './project/profiler-results-performance-issue-report/profiler-results-performance-issue-report.component';
import { ProfilerResultsSecurityIssueReportComponent } from './project/profiler-results-security-issue-report/profiler-results-security-issue-report.component';
import { ProfilerResultsIntegrationReportComponent } from './project/profiler-results-integration-report/profiler-results-integration-report.component';
import { ProfilerResultsProcessMapReportComponent } from './project/profiler-results-process-map-report/profiler-results-process-map-report.component';
import { ProfilerResultsDatabaseCodeReviewReportComponent } from './project/profiler-results-database-code-review-report/profiler-results-database-code-review-report.component';
import { ProfilerResultsDatabaseCodeCompatibilityReportComponent } from './project/profiler-results-database-code-compatibility-report/profiler-results-database-code-compatibility-report.component';
import { ProfilerResultsDatabaseCodeAnalysisSnapshotComponent } from './project/profiler-results-database-code-analysis-snapshot/profiler-results-database-code-analysis-snapshot.component'


const appRoutes: Routes = [{
  path: '', component: StarterComponent,
},
{
  path: 'dashboard', component: DashboardComponent,
},
{
  path: 'd3component', component: D3ChartComponent,
},
{
  path: 'd3uxcomponent', component: UxDiagramSampleComponent,
},
{
  path: 'uxdiagram', component: UxDiagramComponent,
},
{
  path: 'project-configuration', component: ProjectConfigurationComponent,
},
{
  path: 'previous-profiler-results', component: PreviousProfilerResultsComponent,
},
{
  path: 'profiler-configuration', component: ProfilerConfigurationComponent,
},
{
  path: 'profiler-results', component: ProfilerResultsComponent,

  children: [
    { path: '', component: ProfilerResultsSnapshotComponent },
    { path: 'snapshot', component: ProfilerResultsSnapshotComponent },
    { path: 'component-report', component: ProfilerResultsComponentReportComponent },
    { path: 'business-rules', component: BusinessRulesResultsComponent },
    { path: 'ux', component: ProfilerResultsUxReportComponent },
    { path: 'knowledge-graph', component: ProfilerResultsKnowledgeGraphComponent },
    { path: 'domain-model', component: ProfilerResultsDomainModelComponent },
    { path: 'analysis-report', component: ProfilerResultsAnalysisReportComponent },
    { path: 'code-review-report', component: ProfilerResultsCodeReviewReportComponent },
    { path: 'use-case-report', component: ProfilerResultsUseCaseReportComponent },
    { path: 'performance-issue-report', component: ProfilerResultsPerformanceIssueReportComponent },
    { path: 'security-issues-report', component: ProfilerResultsSecurityIssueReportComponent },
    { path: 'integration-report', component: ProfilerResultsIntegrationReportComponent },
    { path: 'process-map-report', component: ProfilerResultsProcessMapReportComponent },
    { path: 'database-code-review', component: ProfilerResultsDatabaseCodeReviewReportComponent },
    { path: 'database-compatibility', component: ProfilerResultsDatabaseCodeCompatibilityReportComponent },
    { path: 'database-profiler-snapshot', component: ProfilerResultsDatabaseCodeAnalysisSnapshotComponent },
    
    
  ]
},


]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectConfigurationComponent,
    ProfilerConfigurationComponent,
    ProfilerResultsComponent,
    ProfilerResultsSnapshotComponent,
    ProfilerResultsComponentReportComponent,
    ProfilerResultsUxReportComponent,
    ProfilerResultsKnowledgeGraphComponent,
    PreviousProfilerResultsComponent,
    StarterComponent,
    BusinessRulesResultsComponent,
    HighlightPipe,
    BusinessRulesSourceCodeComponent,
    BusinessRulesExplainedComponent,
    D3ChartComponent,
    UxDiagramSampleComponent,
    UxDiagramComponent,
    ProfilerResultsDomainModelComponent,
    ProfilerResultsAnalysisReportComponent,
    ProfilerResultsCodeReviewReportComponent,
    ProfilerResultsUseCaseReportComponent,
    ProfilerResultsPerformanceIssueReportComponent,
    ProfilerResultsSecurityIssueReportComponent,
    ProfilerResultsIntegrationReportComponent,
    ProfilerResultsProcessMapReportComponent,
    ProfilerResultsDatabaseCodeReviewReportComponent,
    ProfilerResultsDatabaseCodeCompatibilityReportComponent,
    ProfilerResultsDatabaseCodeAnalysisSnapshotComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    RouterModule.forRoot(appRoutes),
    NgChartsModule,
    MatFormFieldModule,       // Import form field module
    MatInputModule,           // Import input module
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    CdkAccordionModule, MatExpansionModule, MatSidenavModule, MatListModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
