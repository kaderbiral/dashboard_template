var lineChart = document.getElementById("multiple_line_chart").getContext("2d");
var chart = new Chart(lineChart, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July' ,'August', 'September', 'October','November','December'],
    datasets: [
      {
        data: [100000, 3000, 1000, 6000, 5000, 50000, 90000, 10000, 62000, 90000, 150000, 88000],
        label: "Europe",
        backgroundColor: 'rgb(36, 204, 182, 0.2)',
        borderColor: 'rgb(36, 204, 182)',
        borderWidth: 2,

      },
      {
        data: [25000, 2000, 5000, 6000, 2000, 22000, 70000, 75000, 100000, 120000, 40000, 120000],
        label: "Asia",
        backgroundColor: 'rgba(48, 48, 48, 0.2)',
        borderColor: 'rgba(48, 48, 48, 0.2)',
        borderWidth: 2,
      },
      {
        data: [8000, 4000, 8000, 9000, 3000, 85000, 82000, 50000, 70000, 15000, 80000, 60000],
        label: "America",
        backgroundColor: 'rgba(247, 134, 77, 0.2)',
        borderColor: 'rgba(247, 134, 77, 0.2)',
        borderWidth: 2,
      },
      {
        data: [7000, 1000, 6000, 4000, 2500, 53000, 38000, 45000, 18000, 75000, 50000, 82000],
        label: "Africa",
        backgroundColor: 'rgba(255, 251, 0, 0.2)',
        borderColor: 'rgba(255, 251, 0, 0.2)',
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            drawOnChartArea: false,
          },
        },
      ],
    },
  },
});
