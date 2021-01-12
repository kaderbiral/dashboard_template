var barChart = document.getElementById('bar_chart').getContext('2d');
var chart = new Chart(barChart, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July' ,'August', 'September', 'October','November','December'],
        datasets: [{
            label: 'Sales',
            backgroundColor: [
                'rgb(48, 48, 48, 0.2)',
                'rgba(48, 48, 48, 0.2)',
                'rgba(48, 48, 48, 0.2)',
                'rgb(48, 48, 48, 0.2)',
                'rgba(48, 48, 48, 0.2)',
                'rgba(247, 134, 77, 0.2)',
                'rgba(247, 134, 77, 0.2)',
                'rgba(36, 204, 182, 0.2)',
                'rgba(247, 134, 77, 0.2)',
                'rgba(247, 134, 77, 0.2)',
                'rgba(36, 204, 182, 0.2)',
                'rgba(48, 48, 48, 0.2)',
            ],
            borderColor: 'rgb(36, 204, 182)',
            borderWidth: 2,
            data: [100, 70, 60, 90, 120, 200, 230, 160, 280, 200, 180, 110]
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




