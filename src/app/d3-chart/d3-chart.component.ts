import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3-chart',
  templateUrl: './d3-chart.component.html',
  styleUrls: ['./d3-chart.component.css']
})
export class D3ChartComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const data = [10, 15, 20, 25, 30]; // Example data

    // Get the host element
    const element = this.elementRef.nativeElement;

    // Set the dimensions of the chart
    const width = 500;
    const height = 300;

    // Create an SVG element
    const svg = d3.select(element)
      .select('.chart-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Create a bar chart
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 50)
      .attr('y', d => height - d * 10)
      .attr('width', 40)
      .attr('height', d => d * 10)
      .attr('fill', 'steelblue');

    // Add labels
    svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text(d => d)
      .attr('x', (d, i) => i * 50 + 20)
      .attr('y', d => height - d * 10 - 5)
      .attr('text-anchor', 'middle')
      .attr('fill', 'black');
  }
}
