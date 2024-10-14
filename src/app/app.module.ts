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

const appRoutes: Routes = [{
  path: '', component: DashboardComponent,
  
  
  children: [
      { path: '', component: DashboardComponent },
    ],

  },
  {
    path: 'project-configuration', component: ProjectConfigurationComponent,
  }

]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectConfigurationComponent
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
