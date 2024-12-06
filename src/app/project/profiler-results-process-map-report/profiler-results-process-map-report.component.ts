import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-profiler-results-process-map-report',
  templateUrl: './profiler-results-process-map-report.component.html',
  styleUrls: ['./profiler-results-process-map-report.component.css']
})
export class ProfilerResultsProcessMapReportComponent implements AfterViewInit {
  @ViewChild('workflowMap', { static: true }) private chartContainer!: ElementRef;

  stages: Array<any> = [
    { id: 'start', name: 'Purchase Order', x: 150, y: 50 },
    { id: 'enterdata', name: 'Enter Data', x: 450, y: 150 },
    { id: 'validation', name: 'Data Validation', x: 700, y: 150 },
    { id: 'businesslogic', name: 'Business Logic', x: 700, y: 250 },
    { id: 'save', name: 'Save', x: 700, y: 350 },

    { id: 'navigate', name: 'To Search', x: 1000, y:450 }
  ];

  links: Array<any> = [
    { source: 'start', target: 'enterdata' },
    { source: 'enterdata', target: 'validation' },
    { source: 'validation', target: 'businesslogic' },
    { source: 'businesslogic', target: 'save' },
    { source: 'save', target: 'navigate' },
  ];

  constructor() {}

  ngAfterViewInit(): void {
    this.createWorkflowDiagram();
  }

  createWorkflowDiagram(): void {
    const width = 1300;
    const height = 800;
    const rectWidth = 200;  // Rectangle width
    const rectHeight = 40;  // Rectangle height
    const svg = d3.select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('border', '1px solid #ccc')  // Add border to see the SVG area
      .style('background-color', '#f5f5f5');  // Optional, for better visibility;
  
    // Define the arrowhead marker
    svg.append('defs')
      .append('marker')
      .attr('id', 'arrowhead')
      .attr('viewBox', '0 0 10 10')
      .attr('refX', 8)
      .attr('refY', 5)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M 0 0 L 10 5 L 0 10 z') // This creates the triangle for the arrowhead
      .attr('fill', '#007bff');
  
    // Draw stages as rectangles
    svg.selectAll('.stage')
      .data(this.stages)
      .enter()
      .append('rect')
      .attr('class', 'stage')
      .attr('x', (d) => d.x - rectWidth / 2)  // Center rectangle
      .attr('y', (d) => d.y - rectHeight / 2) // Center rectangle
      .attr('width', rectWidth)
      .attr('height', rectHeight)
      .attr('rx', 10)  // Rounded corners
      .attr('ry', 10)  // Rounded corners
      .attr('fill', '#007bff')
      .attr('stroke', '#0056b3')
      .attr('stroke-width', 2);
  
    // Add stage labels
    svg.selectAll('.stage-label')
      .data(this.stages)
      .enter()
      .append('text')
      .attr('class', 'stage-label')
      .attr('x', (d) => d.x)  // Center horizontally
      .attr('y', (d) => d.y)  // Center vertically (we'll adjust with 'dy')
      .attr('dy', '0.35em')  // Center vertically by adjusting 'dy' (0.35em centers the text)
      .attr('text-anchor', 'middle')
      .attr('fill', 'white')
      .text((d) => d.name);
  
    // Draw curved arrows between stages (using path)
    svg.selectAll('.arrow')
      .data(this.links)
      .enter()
      .append('path')
      .attr('class', 'arrow')
      .attr('d', (d) => {
        const start = this.getStagePosition(d.source);
        const end = this.getStagePosition(d.target);
        
        // Control points for the cubic Bezier curve
        const controlX1 = start.x + rectWidth / 8;
        const controlY1 = start.y + 75;  // Adjust control point for curve
        const controlX2 = end.x - rectWidth / 2;
        const controlY2 = end.y - 75;  // Adjust control point for curve
  
        // Create a cubic Bezier path
        return `M ${start.x + rectWidth / 2} ${start.y} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${end.x - rectWidth / 2} ${end.y}`;
      })
      .attr('stroke', '#007bff')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
      .attr('marker-end', 'url(#arrowhead)');
  }
  
  // Helper method to get position of a stage based on its id
  getStagePosition(stageId: string): { x: number, y: number } {
    const stage = this.stages.find((s) => s.id === stageId);
    return stage ? { x: stage.x, y: stage.y } : { x: 0, y: 0 };
  }
}
