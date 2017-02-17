var myChartP = echarts.init(document.querySelector('#canvasPeople'));

option = {
    title : {
    text: '时段流量统计'
	},
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['10：00-12：00', '12:00-14：00', '14:00-16:00', '16:00-18:00', '18:00-20：00', '20：00-22:00'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
	        axisLabel: {
	            formatter: '{value} 单'
	        }            
        }
    ],
    series : [
        {
            name:'人流量',
            type:'bar',
            barWidth: '40%',
            data:[20, 30, 10, 6, 25, 10]
        }
    ]
};
myChartP.setOption(option)
