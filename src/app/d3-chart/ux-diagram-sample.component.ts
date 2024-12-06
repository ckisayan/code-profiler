import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

// Define the interface for your data structure
interface NodeData {
  name: string;
  children?: NodeData[];
}

@Component({
  selector: 'app-ux-diagram',
  templateUrl: './ux-diagram-sample.component.html',
  styleUrls: ['./ux-diagram-sample.component.css']
})
export class UxDiagramSampleComponent implements OnInit {
  // Define the data using the interface
  private data: NodeData = {
    name: 'Application',
    children: [
      {
        name: 'Header',
        children: [
          { name: 'Logo' },
          { name: 'Navigation' },
        ],
      },
      {
        name: 'Main Content',
        children: [
          {
            name: 'Sidebar',
            children: [{ name: 'Filters' }, { name: 'Links' }],
          },
          { name: 'Article' },
        ],
      },
      {
        name: 'Footer',
        children: [{ name: 'Contact Info' }, { name: 'Copyright' }],
      },
    ],
  };

  ngOnInit(): void {
    this.createDiagram();
  }

  private createDiagram(): void {
    const width = 800;
    const height = 600;

    // Set up SVG canvas
    const svg = d3.select('#uxDiagram')
      .attr('width', width)
      .attr('height', height);

    // Create tree layout
    const treeLayout = d3.tree<NodeData>().size([height - 100, width - 200]);

    // Create hierarchy from data
    const root = d3.hierarchy<NodeData>(this.data);
    const treeData = treeLayout(root);

    // Add links
    const linkGenerator = d3.linkHorizontal<any, any>()
      .x((d: [number, number]) => d[1])
      .y((d: [number, number]) => d[0]);

    svg.selectAll('.link')
      .data(treeData.links())
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', (d) => linkGenerator({
        source: [d.source.x, d.source.y],
        target: [d.target.x, d.target.y],
      }))
      .style('fill', 'none')
      .style('stroke', '#636e72')
      .style('stroke-width', '2px');

    // Add nodes
    const nodes = svg.selectAll('.node')
      .data(treeData.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', (d: any) => `translate(${d.y + 50}, ${d.x + 50})`);

    // Add circles to nodes
    nodes.append('circle')
      .attr('r', 20)
      .style('fill', '#6c5ce7')
      .style('stroke', '#2d3436')
      .style('stroke-width', '2px');

    // Add labels to nodes
    nodes.append('text')
      .attr('dy', 4)
      .attr('x', (d: any) => (d.children ? -25 : 25))
      .style('text-anchor', (d: any) => (d.children ? 'end' : 'start'))
      .style('font', '12px sans-serif')
      .style('fill', '#2d3436')
      .text((d: any) => d.data.name);
  }
}
