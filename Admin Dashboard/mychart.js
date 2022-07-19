var ctx = document.getElementById('myChart').getContext('2d');
var Earning = document.getElementById('Earning').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Facebook', 'Youtube', 'Amazon'],
        datasets: [{
            label: 'Traffic Source',
            data: [1400, 1900, 2300],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
        }]
    },
    options: {
        responsive: true,
    }
});

var myChart = new Chart(Earning, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March','April', 'May', 'June','July', 'August', 'September','October', 'November', 'December'],
        datasets: [{
            label: 'Earning',
            data: [1200, 1900, 3000 , 4400 , 4000 , 1777 , 4700 , 3200,5500 , 6000 , 6700 , 7700],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
        }]
    },
    options: {
        responsive: true,
    }
});