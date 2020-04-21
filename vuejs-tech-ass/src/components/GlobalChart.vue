<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  name: "BarChart",
  props: ["data"],
  mounted() {
    // reformat in the way the lib wants
    let chartData = {
      labels: ['Total Cases', 'Total Deaths', 'Total Recoveries'],
      datasets: [
        {
          label: 'Statistics',
           backgroundColor: '#007bff',
          data: []
        }
      ]
    };

     this.data.total_cases = String(this.data.total_cases).replace(/,/g, ""); //replace ,
     this.data.death_cases = String(this.data.death_cases).replace(/,/g, ""); //replace ,
     this.data.recovery_cases = String(this.data.recovery_cases).replace(/,/g, ""); //replace ,
    
          chartData.datasets[0].data.push(this.data.total_cases, this.data.death_cases, this.data.recovery_cases);
         
     console.log( chartData.datasets[0].data, "j");


    this.renderChart(chartData, {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            stacked: true
          }
        ],
        yAxes: [
          {
            stacked: true
          }
        ]
      }
    });
  }
};
</script>
