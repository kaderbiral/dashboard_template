var lineChart = document.getElementById('line_chart').getContext('2d');
var chart = new Chart(lineChart, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July' ,'August', 'September', 'October','November','December'],
        datasets: [{
            label: 'Revenue',
            backgroundColor: 'rgb(36, 204, 182, 0.2)',
            borderColor: 'rgb(36, 204, 182)',
            borderWidth: 2,
            data: [200000, 40000, 80000, 100000, 50000, 210000, 280000, 180000, 250000, 300000, 320000, 350000]
        }]
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
