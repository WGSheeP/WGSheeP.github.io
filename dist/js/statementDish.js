var myChartD = echarts.init(document.querySelector('#canvasDish'));
option = {
    title : {
        text: '当日菜品销量统计',
        subtext: '后台数据为依据',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['鱼香肉丝','糖醋排骨','麻婆豆腐','小葱拌豆腐','清蒸鲈鱼','烧茄子','小鸡炖蘑菇']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
//          center: ['50%', '60%'],
            data:[
                {value:1, name:'鱼香肉丝'},
                {value:2, name:'糖醋排骨'},
                {value:2, name:'麻婆豆腐'},
                {value:3, name:'小葱拌豆腐'},
                {value:3, name:'清蒸鲈鱼'},
                {value:5, name:'烧茄子'},
                {value:5, name:'小鸡炖蘑菇'}

            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 200,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChartD.setOption(option);
