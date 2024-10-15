
import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-profiler-results',
  templateUrl: './profiler-results.component.html',
  styleUrls: ['./profiler-results.component.css']
})
export class ProfilerResultsComponent {
  constructor(private location: Location) {}
  goBack(): void {
    this.location.back(); // This will take the user back to the previous page
  }
}
