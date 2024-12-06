import { Component, OnInit } from '@angular/core';
import { UxDiagramService, UxNode } from './ux-diagram.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-ux-diagram',
  templateUrl: './ux-diagram.component.html',
  styleUrls: ['./ux-diagram.component.css']
})
export class UxDiagramComponent implements OnInit {
  constructor(private uxDiagramService: UxDiagramService) {}

  ngOnInit(): void {
    this.uxDiagramService.fetchUxDiagram().subscribe({
      next: (data: UxNode) => this.createDiagram(data),
      error: (err) => console.error('Error fetching UX diagram data:', err)
    });
  }

  private createDiagram(data: UxNode): void {
    const width = 800;
    const height = 600;

    const svg = d3.select('#uxDiagram')
      .attr('width', width)
      .attr('height', height);

    const treeLayout = d3.tree<UxNode>().size([height - 100, width - 200]);
    const root = d3.hierarchy(data);
    const treeData = treeLayout(root);

    const linkGenerator = d3.linkHorizontal<any, any>()
      .x((d) => d[1])
      .y((d) => d[0]);

    svg.selectAll('.link')
      .data(treeData.links())
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', (d) => linkGenerator({
        source: [d.source.x, d.source.y],
        target: [d.target.x, d.target.y],
      }))
      .style('stroke', '#636e72')
      .style('fill', 'none');

    const nodes = svg.selectAll('.node')
      .data(treeData.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', (d) => `translate(${d.y}, ${d.x})`);

    nodes.append('circle')
      .attr('r', 20)
      .style('fill', '#6c5ce7');

    nodes.append('text')
      .attr('x', (d) => (d.children ? -25 : 25))
      .attr('dy', 5)
      .style('text-anchor', (d) => (d.children ? 'end' : 'start'))
      .text((d) => d.data.name);
  }
}
