var pieChart = document.getElementById('pie_chart').getContext('2d');
var chart = new Chart(pieChart, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    
    data: {
        labels: ['Female', 'Male'],
        datasets: [{
            backgroundColor: [
                'rgb(36, 204, 182, 0.2)',
                'rgba(48, 48, 48, 0.2)'
            ],
            
            borderColor: 'rgb(36, 204, 182)',
            borderWidth: 2,
            data: [80, 20]
        }]
    },

    // Configuration options go here
    options: {}
});