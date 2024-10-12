import { Component,OnInit } from '@angular/core';
import { ChartType, ChartData, ChartDataset, Legend, Plugin, LabelItem, ChartOptions, plugins, Title } from 'chart.js';
import Chart from 'chart.js/auto'; // Import Chart.js
import ChartDataLabels from 'chartjs-plugin-datalabels';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public projectPhasesLabel: string [][] = [
    ['Prospecting'],
    ['Discovery & Analysis'],
    ['In Transformation'],
    ['Deployed / Being Tested'],
    ['Completed'],
  ];
  public pieChartLabels: string[][] = [
    ['Legacy Java Modernization'],
    ['Legacy .NET Modernization'],
    ['Legacy RPG Modernization'],
    ['Legacy COBOL Modernization'],
    ['Legacy SAP Modernization'],
    
  ];
  public pieChartPlugins: Plugin[] = [
    {
      id: 'before',
      beforeInit: function(chart: any, options: any) {
        console.log('chart');
        console.log(chart);
        chart.legend.height += 100;
        chart.legend.afterFit = function() {
          this.height += 100;
        };
      }
    }
  ];

  ngOnDestroy() {
    console.log("destroy");
  }
  constructor() {
    // Register the plugin globally
    Chart.register(ChartDataLabels);
  }
  public chartOptions: any = {
    layout: {},
    indexAxis: 'x',
    responsive: true,
    // scales: {
    //   xaxes:{
    //     ticks: {
    //       padding: 0.1,
          
    //     },
    //     grid: {
    //       drawBorder: false,
    //       color: '#E6E9F4',
    //       tickColor: '#E6E9F4'
    //     }
    //   },
    //   yaxes:{
    //     ticks: {
    //       padding: 1
    //     },
    //     grid: {
    //       drawBorder: false,
    //       color: '#E6E9F4',
    //       tickColor: '#E6E9F4'
    //     }
    //   }
    // },
    plugins: {
      title: {display: true, text: 'Project Types'}, 
      legend: {display: true, align: 'start', position: 'bottom',
        labels: {
          usePointStype: true,
          padding: 10
        }
      },
      datalabels: {        
        color: '#000000',
        font: {
          size:30,
          weight: 'bold', 
          family: 'Arial',
          color: 'white'          
        },     
        formatter: (value: number) => {
          return value; // Display value directly
        },
      }
    } 
  }

  public chartPhaseOptions: any = {
    layout: {},
    indexAxis: 'x',
    responsive: true,   
    plugins: {
      title: {display: true, text: 'Phase Types'}, 
      legend: {display: true, align: 'start', position: 'bottom',
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
  }

  public pieChartData: ChartDataset[] = [
    { data: [18, 7, 6, 5, 10], backgroundColor: ['green', 'blue', 'yellow', 'darkred', 'orange'],label: 'Project Type' },
  ];   
  public projectPhaseData: ChartDataset[] = [
    { data: [10, 4, 3, 2, 6], backgroundColor: ['#FF6B6B', '#FFB86C', '#FFD93D', '#43D9B8', '#6A5ACD'],label: 'Phase Type' },
  ];  
  public pieChartType: ChartType = 'pie';
  public projectPhaseChartType: ChartType = 'doughnut';
  
    
  ngOnInit(){
    console.log("starting dashboard component...");
  }
  changeData() {
    let data: string = JSON.stringify(this.pieChartData);
    let newData = JSON.parse(data);
    newData[0] += 10;
    this.pieChartData = newData;
  }
}
