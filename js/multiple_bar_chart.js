var barChart = document.getElementById('multiple_bar_chart').getContext('2d');
var chart = new Chart(barChart, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July' ,'August', 'September', 'October','November','December'],
      datasets: [
        {
          label: "Female",
          backgroundColor: 'rgb(36, 204, 182, 0.2)',
          borderColor: 'rgb(36, 204, 182)',
          borderWidth: 2,

          data: [5, 8, 10, 10, 3, 4, 4, 6, 4, 7, 12, 5]
        }, {
          label: "Male",
          backgroundColor: 'rgba(48, 48, 48, 0.2)',
          borderColor: 'rgba(48, 48, 48, 0.2)',
          borderWidth: 2,
          data: [1, 2, 3, 1, 2, 1, 1, 2, 3, 1, 1, 2]
        }
      ]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false
                }
            }],
            yAxes: [{
                gridLines: {
                    drawOnChartArea: false
                }
            }]
        }
    }
});