# echarts_elastic
一个echarts.js图表放大缩小插件
index.html
```html
<!doctype html>
<html>
	<head>
		<title>vue+chart</title>
		<script src="js/echarts.min.js"></script>
		<script src="js/echarts_elastic.js"></script>
		<style>
			.chart{
				margin:0 auto;
			}
			#but{
				width:310px;
				margin:0 auto;
			}
			.block{
				width:400px;
				margin:0 auto;
			}
		</style>

	</head>

	<body>
		<div id="panel">
				<div id="main" style="width:400px;height:400px"></div>
		</div>
		<button onclick='add()'>放大</button>
		<button onclick='red()'>缩小</button>
		<script src="js/script.js"></script>
	</body>
</html>
```
script.js文件
``` javascript
    var myChart = echarts.init(document.getElementById('main'));
        var option/*这里只能使用option*/= {
            title: {
                text: 'ECharts 入门教程'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
		//echarts 
        myChart.setOption(option);
		//new Elastic对象
		var els= new Elastic('main','panel');
		function add(){
			//调用放大方法
		els.enlarge();
		//渲染图表
		};
		function red(){
			//调用缩小方法
		els.narrow();
		//渲染图表
		}
```
