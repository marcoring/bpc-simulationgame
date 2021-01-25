<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  mounted() {
    this.renderChart(
      {
        labels: [
          "Purchasing",
          "Logistics",
          "Frame Preparation",
          "Sensor Preparation",
          "Bike Construction",
          "Sales",
        ],
        datasets: [
          {
            backgroundColor: [
              "red",
              "green",
              "blue",
              "pink",
              "purple",
              "brown",
            ],
            data: [25, 15, 20, 10, 5, 5],
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>
