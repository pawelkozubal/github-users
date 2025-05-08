import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);



const ChartComponent = ({data}) => { 

  const chartConfigs = {
    type: 'column2d', 
    width: '100%', 
    height: '400', 
    dataFormat: 'json',
    dataSource: {
      Chart: { 
        caption: ' Most Popular',
        yAxisName: 'Stars',
        xAxisName: 'Repos',
        yAxisNameFontSize:'16px',
        xAxisNameFontSize:'16px',
        theme: 'ocean',
        
      },
      data,
    }
  }
  return <ReactFC {...chartConfigs}/>;
};

export default ChartComponent;

