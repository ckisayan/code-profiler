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
const appRoutes: Routes = [{
  path: '', component: StarterComponent,
},
{
  path: 'dashboard', component: DashboardComponent,
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
    BusinessRulesExplainedComponent
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
