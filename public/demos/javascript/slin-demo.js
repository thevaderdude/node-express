var slinStart = document.querySelector("#slin-start");
var slinStop = document.querySelector("#slin-stop");

var ctx = document.getElementById('slin-chart').getContext('2d');
Chart.defaults.global.defaultFontColor = 'rgb(255,255,255)';

var slinChart = new Chart(ctx, {

    type: 'scatter',

    data: {
        datasets: [{
            data: [{
                x: 1000,
                y: 200
            }, {
                x: 800,
                y: 190
            }, {
                x: 1343,
                y: 237
            }, {
                x: 1689,
                y: 342
            }, , {
                x: 2583,
                y: 537
            }, , {
                x: 1733,
                y: 375
            }, , {
                x: 2349,
                y: 598
            }, , {
                x: 1724,
                y: 460
            }, , {
                x: 1965,
                y: 487
            }, , {
                x: 1278,
                y: 289
            }, , {
                x: 738,
                y: 137
            }, ],
            pointBorderColor: 'rgb(255,223,0)',
            borderColor: 'rgb(255,223,0)',
        }],
        
    },

    options: {
        title:{
            display: true,
            text: 'Square Feet vs Housing Price',
            fontSize: 24
        },
        legend:{
            display: false
        },
        scales:{
            yAxes:[{
                scaleLabel: {
                    display: true,
                    labelString: 'Price (thousand)',
                    fontSize: 18
                },
            }],
            xAxes:[{
                scaleLabel: {
                    display: true,
                    labelString: 'Square Feet',
                    fontSize: 18,
                    type: 'linear',
                    position: 'bottom'
                },
            }],
        }
    }
});

slinStop.addEventListener('click',function(){
    alert('single-var linear demo');
});

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
}

arrLabels = [6,7,8,9,10,11,12,13,14,15]
arrData = [100,150,200,300,320,380,400,600,900,1000]
var delayInMilliseconds = 1000;

slinStart.addEventListener('click', function(){
    for(i = 0; i < arrData.length; i++){

        addData(slinChart,arrLabels[i],arrData[i]);
        slinChart.update();

    }
});