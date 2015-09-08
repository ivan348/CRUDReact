define(function(require) {
	var React = require("react");
	var Chartist = require("chartist");
	var highcharts = require("highcharts");
	var $ = require("jquery");
	return React.createClass({
		getInitialState: function() {
			return {
				width : 100 ,
				height : 100
			};
		},
		componentDidMount: function() {
			this.setState({
				chart: new Chartist.Pie('.ct-chart', {
				    series: [20, 10, 30, 40]
				}, {
					chartPadding: 30,
					labelOffset: 50,
				labelDirection: 'explode'
				})
			});
			$('#container').highcharts({
		        chart: {
		            plotBackgroundColor: null,
		            plotBorderWidth: null,
		            plotShadow: false,
		            type: 'pie'
		        },
		        title: {
		            text: 'Browser market shares January, 2015 to May, 2015'
		        },
		        tooltip: {
		            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		        },
		        plotOptions: {
		            pie: {
		                allowPointSelect: true,
		                cursor: 'pointer',
		                dataLabels: {
		                    enabled: true,
		                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
		                    style: {
		                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
		                    }
		                }
		            }
		        },
		        series: [{
		            name: "Brands",
		            colorByPoint: true,
		            data: [{
		                name: "Microsoft Internet Explorer",
		                y: 56.33
		            }, {
		                name: "Chrome",
		                y: 24.03,
		                sliced: true,
		                selected: true
		            }, {
		                name: "Firefox",
		                y: 10.38
		            }, {
		                name: "Safari",
		                y: 4.77
		            }, {
		                name: "Opera",
		                y: 0.91
		            }, {
		                name: "Proprietary or Undetectable",
		                y: 0.2
		            }]
		        }]
		    });
		},
		increase: function(){
			this.setState({
				width: this.state.width + 5,
				height: this.state.height + 5 
			});
		},
		render: function() {			
			return (
				<div className="statitics">Statistics
					<div id="high"></div>
					<div className="ct-chart" width={this.state.width + "px"} height={this.state.height + "px"}></div>
				</div>
			);
		}
	});
})