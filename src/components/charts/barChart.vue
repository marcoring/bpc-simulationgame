<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "Purchaising",
          "Logistics",
          "Frame Preparation",
          "Sensors Preparation",
          "Bike Construction",
          "Sales",
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 20, 12, 39, 11, 40],
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>
