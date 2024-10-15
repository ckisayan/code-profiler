import { Component,OnInit } from '@angular/core';
import { ChartType, ChartData, ChartDataset, Legend, Plugin, LabelItem, ChartOptions, plugins, Title } from 'chart.js';
import Chart from 'chart.js/auto'; // Import Chart.js
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-profiler-results-snapshot',
  templateUrl: './profiler-results-snapshot.component.html',
  styleUrls: ['./profiler-results-snapshot.component.css']
})
export class ProfilerResultsSnapshotComponent {
  public pieChartLabels: string[] = ['Critical', 'Warnings', 'Informational'];
  //public pieChartData: number[] = [5, 70, 220];

  public pieChartData: ChartDataset[] = [
    { data: [9, 35, 65], backgroundColor: ['#ff0000', '#ffa500', '#1e90ff'],label: 'Project Type' },
  ];     
  public pieChartType: ChartType = 'pie';
 
  public pieChartOptions: any = {
    layout: {},
    indexAxis: 'x',
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      title: {display: true, text: 'Severity Types'}, 
      legend: {display: true, align: 'middle', position: 'bottom',
        labels: {
          usePointStype: true,
          padding: 10
        }
      },
      datalabels: {
        color: '#ffffff',
        font: {
          size:30,
          weight: 'bold',
          family: 'Arial',          
          color: '#ffffff',
        },     
        formatter: (value: number) => {
          return value; // Display value directly
        },
      }
    } 
  };
  public pieChartColors: any[] = [
    {
      backgroundColor: ['#ff0000', '#ffa500', '#1e90ff'],
    },
  ];

  ngOnInit(){
    console.log("starting profiler results snapshot component...");
  }
  constructor() {
    // Register the plugin globally
    Chart.register(ChartDataLabels);
  }
}
