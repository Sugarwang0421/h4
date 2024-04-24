// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: '台灣天氣'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">Wikipedia.com</a>'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
            description: 'Months of the year'
        }
    },
    yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            format: '{value}°'
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: '淡水',
        marker: {
            symbol: 'square'
        },
        data: [15.4, 15.7, 17.7, 21.4, 24.7, 27.3, 29.0, 28.7, 26.9, 23.6, 21.0, 17.3]

    }, {
        name: '臺中',
        marker: {
            symbol: 'diamond'
        },
        data: [17.0, 17.7, 20.1, 23.5, 26.4, 28.1, 28.9, 28.4, 27.8, 25.5, 22.6, 18.7]
    },{
        name: '臺東',
        marker: {
            symbol: 'diamond'
        },
        data: [19.7, 20.2, 21.8, 24.1, 26.4, 28.3, 29.1, 28.8, 27.7, 25.8, 23.6, 20.8]
    }
    ]
});