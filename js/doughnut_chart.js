var doughnutChart = document.getElementById('doughnut_chart').getContext('2d');
var chart = new Chart(doughnutChart, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    
    data: {
        labels: ['Credit Card', 'Debit Card', 'E-wallet', 'Cash'],
        datasets: [{
            backgroundColor: [
                'rgb(36, 204, 182, 0.2)',
                'rgba(48, 48, 48, 0.2)',
                'rgba(247, 134, 77, 0.2)',
                'rgba(255, 251, 0, 0.2)'
            ],
            
            borderColor: 'rgb(36, 204, 182)',
            borderWidth: 2,
            data: [27, 8, 25, 40]
        }]
    },

    // Configuration options go here
    options: {}
});