<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "Purchaising",
          "Logistics",
          "Frame preparation",
          "Sensors preparation",
          "Engine preparation",
          "Battery preparation",
          "Bike construction",
          "Application development and maintenance",
          "Quality assurance",
          "Sales",
        ],
        datasets: [
          {
            label: "First Round",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 0, 0, 40, 0, 0, 29],
          },
          {
            label: "Second Round",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19, 0, 27, 100, 0, 0, 84],
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>
