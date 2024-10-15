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
    { data: [5, 55, 125], backgroundColor: ['#ff0000', '#ffa500', '#1e90ff'],label: 'Project Type' },
  ];     
  public pieChartType: ChartType = 'pie';
  public pieChartOptions: any = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        color: '#fff',
        font: {
          size: 16,
        },
      },
    },
  };
  public pieChartColors: any[] = [
    {
      backgroundColor: ['#ff0000', '#ffa500', '#1e90ff'],
    },
  ];

  ngOnInit(){
    console.log("starting profiler results snapshot component...");
  }
}
