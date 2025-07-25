import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);



const ChartComponent = ({data}) => { 

  const chartConfigs = {
    type: 'doughnut2d', 
    width: '100%', 
    height: '400', 
    dataFormat: 'json',
    dataSource: {
      Chart: { 
        caption: 'Stars Per Language',
        decimals: 0, 
        doughnutRadius: '45%',
        showPercentValues: 0,
        theme: 'ocean',
      },
      data,
    }
  }
  return <ReactFC {...chartConfigs}/>;
};

export default ChartComponent;
