import { default as ReactApexChart } from 'react-apexcharts';
import { useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';
import { useGetBoxOfficeRevenue, useGetGlobalElectricityDemand } from '../hooks/financial-hooks';
import styles from './apex-charts.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function ApexCharts() {
  const classes = createClassTransformer(styles);
  const options: ApexOptions = {
    title: {
      text: 'Column'
    },
    chart: {
      background: 'theme:surface-500',
      zoom: {
        enabled: true
      },
      toolbar: {
        show: true
      },
      fontFamily: 'var(--ig-font-family)'
    },
    legend: {
      show: true
    },
    markers: {
      size: 6
    },
    dataLabels: {
      enabled: false
    }
  };
  const options1: ApexOptions = {
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Area'
    },
    chart: {
      background: 'theme:surface-500',
      zoom: {
        enabled: true
      },
      toolbar: {
        show: true
      },
      fontFamily: 'var(--ig-font-family)'
    },
    legend: {
      show: true
    },
    markers: {
      size: 6
    },
    dataLabels: {
      enabled: false
    }
  };
  const options2: ApexOptions = {
    title: {
      text: 'Scatter'
    },
    chart: {
      background: 'theme:surface-500',
      zoom: {
        enabled: true
      },
      toolbar: {
        show: true
      },
      fontFamily: 'var(--ig-font-family)'
    },
    legend: {
      show: false
    },
    markers: {
      size: 6
    },
    dataLabels: {
      enabled: false
    }
  };
  const options3: ApexOptions = {
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Line'
    },
    chart: {
      background: 'theme:surface-500',
      zoom: {
        enabled: true
      },
      toolbar: {
        show: true
      },
      fontFamily: 'var(--ig-font-family)'
    },
    legend: {
      show: false
    },
    markers: {
      size: 6
    },
    dataLabels: {
      enabled: false
    }
  };
  const options4: ApexOptions = {
    stroke: {
      curve: 'monotoneCubic'
    },
    title: {
      text: 'Spline'
    },
    chart: {
      background: 'theme:surface-500',
      zoom: {
        enabled: true
      },
      toolbar: {
        show: true
      },
      fontFamily: 'var(--ig-font-family)'
    },
    legend: {
      show: false
    },
    markers: {
      size: 6
    },
    dataLabels: {
      enabled: false
    }
  };
  const options5: ApexOptions = {
    stroke: {
      curve: 'monotoneCubic'
    },
    chart: {
      stacked: true,
      stackType: 'normal',
      background: 'theme:surface-500',
      zoom: {
        enabled: true
      },
      toolbar: {
        show: true
      },
      fontFamily: 'var(--ig-font-family)'
    },
    title: {
      text: 'Spline Area'
    },
    legend: {
      show: false
    },
    markers: {
      size: 6
    },
    dataLabels: {
      enabled: false
    }
  };
  const options6: ApexOptions = {
    stroke: {
      curve: 'stepline'
    },
    title: {
      text: 'Step Area'
    },
    chart: {
      background: 'theme:surface-500',
      zoom: {
        enabled: true
      },
      toolbar: {
        show: true
      },
      fontFamily: 'var(--ig-font-family)'
    },
    legend: {
      show: false
    },
    markers: {
      size: 6
    },
    dataLabels: {
      enabled: false
    }
  };
  const options7: ApexOptions = {
    stroke: {
      curve: 'stepline'
    },
    title: {
      text: 'Step Line'
    },
    chart: {
      background: 'theme:surface-500',
      zoom: {
        enabled: true
      },
      toolbar: {
        show: true
      },
      fontFamily: 'var(--ig-font-family)'
    },
    legend: {
      show: false
    },
    markers: {
      size: 6
    },
    dataLabels: {
      enabled: false
    }
  };
  const options8: ApexOptions = {
    chart: {
      background: 'theme:surface-500',
      zoom: {
        enabled: true
      },
      toolbar: {
        show: true
      },
      fontFamily: 'var(--ig-font-family)'
    },
    legend: {
      show: true
    },
    markers: {
      size: 6
    },
    dataLabels: {
      enabled: false
    }
  };
  const options9: ApexOptions = {
    title: {
      text: 'Tree Map'
    },
    chart: {
      background: 'theme:surface-500',
      zoom: {
        enabled: true
      },
      toolbar: {
        show: true
      },
      fontFamily: 'var(--ig-font-family)'
    },
    legend: {
      show: true
    },
    markers: {
      size: 6
    },
    dataLabels: {
      enabled: false
    }
  };
  const options10: ApexOptions = {
    chart: {
      background: 'theme:surface-500',
      zoom: {
        enabled: true
      },
      toolbar: {
        show: true
      },
      fontFamily: 'var(--ig-font-family)'
    },
    legend: {
      show: false
    },
    markers: {
      size: 6
    },
    dataLabels: {
      enabled: false
    }
  };
  const options11: ApexOptions = {
    title: {
      text: 'Box plot'
    },
    chart: {
      background: 'theme:surface-500',
      zoom: {
        enabled: true
      },
      toolbar: {
        show: true
      },
      fontFamily: 'var(--ig-font-family)'
    },
    legend: {
      show: false
    },
    markers: {
      size: 6
    },
    dataLabels: {
      enabled: false
    }
  };
  const options12: ApexOptions = {
    title: {
      text: 'Heatmap'
    },
    colors: [
      '#008FFB'
    ],
    chart: {
      background: 'theme:surface-500',
      zoom: {
        enabled: true
      },
      toolbar: {
        show: true
      },
      fontFamily: 'var(--ig-font-family)'
    },
    legend: {
      show: false
    },
    markers: {
      size: 6
    },
    dataLabels: {
      enabled: false
    }
  };
  const { financialBoxOfficeRevenue: box_Office_Revenue } = useGetBoxOfficeRevenue();
  const { financialGlobalElectricityDemand: global_Electricity_Demand } = useGetGlobalElectricityDemand();
  const [series, setSeries] = useState<ApexAxisChartSeries>(getSeries);
  const [series1, setSeries1] = useState<ApexAxisChartSeries>(getSeries1);
  const [series2, setSeries2] = useState<ApexAxisChartSeries>(getSeries2);
  const [series3, setSeries3] = useState<ApexAxisChartSeries>(getSeries3);
  const [series4, setSeries4] = useState<ApexAxisChartSeries>(getSeries4);
  const [series5, setSeries5] = useState<ApexAxisChartSeries>(getSeries5);
  const [series6, setSeries6] = useState<ApexAxisChartSeries>(getSeries6);
  const [series7, setSeries7] = useState<ApexAxisChartSeries>(getSeries7);
  const [series8, setSeries8] = useState<ApexAxisChartSeries>(getSeries8);
  const [series9, setSeries9] = useState<ApexAxisChartSeries>(getSeries9);
  const [series10, setSeries10] = useState<ApexAxisChartSeries>(getSeries10);
  const [series11, setSeries11] = useState<ApexAxisChartSeries>(getSeries11);
  const [series12, setSeries12] = useState<ApexAxisChartSeries>(getSeries12);

  useEffect(() => {
    setSeries(getSeries());
    setSeries3(getSeries3());
    setSeries4(getSeries4());
    setSeries5(getSeries5());
    setSeries6(getSeries6());
    setSeries7(getSeries7());
    setSeries9(getSeries9());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [box_Office_Revenue]);

  useEffect(() => {
    setSeries1(getSeries1());
    setSeries2(getSeries2());
    setSeries8(getSeries8());
    setSeries10(getSeries10());
    setSeries11(getSeries11());
    setSeries12(getSeries12());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [global_Electricity_Demand]);

  function getSeries(): ApexAxisChartSeries {
    return [
      {
        name: 'TotalWorldBoxOfficeRevenue',
        data: box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'TotalWorldBoxOfficeRevenue'
          ]
        }
      },
      {
        name: 'HighestGrossingMovieInSeries',
        data: box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'HighestGrossingMovieInSeries'
          ]
        }
      }
    ];
  }
  function getSeries1(): ApexAxisChartSeries {
    return [
      {
        name: 'Value',
        data: global_Electricity_Demand,
        parsing: {
          x: 'Label',
          y: [
            'Value'
          ]
        }
      }
    ];
  }
  function getSeries2(): ApexAxisChartSeries {
    return [
      {
        name: 'Value',
        data: global_Electricity_Demand,
        parsing: {
          x: 'Label',
          y: [
            'Value'
          ]
        }
      }
    ];
  }
  function getSeries3(): ApexAxisChartSeries {
    return [
      {
        name: 'TotalWorldBoxOfficeRevenue',
        data: box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'TotalWorldBoxOfficeRevenue'
          ]
        }
      },
      {
        name: 'HighestGrossingMovieInSeries',
        data: box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'HighestGrossingMovieInSeries'
          ]
        }
      }
    ];
  }
  function getSeries4(): ApexAxisChartSeries {
    return [
      {
        name: 'TotalWorldBoxOfficeRevenue',
        data: box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'TotalWorldBoxOfficeRevenue'
          ]
        }
      },
      {
        name: 'HighestGrossingMovieInSeries',
        data: box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'HighestGrossingMovieInSeries'
          ]
        }
      }
    ];
  }
  function getSeries5(): ApexAxisChartSeries {
    return [
      {
        name: 'TotalWorldBoxOfficeRevenue',
        data: box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'TotalWorldBoxOfficeRevenue'
          ]
        }
      },
      {
        name: 'HighestGrossingMovieInSeries',
        data: box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'HighestGrossingMovieInSeries'
          ]
        }
      }
    ];
  }
  function getSeries6(): ApexAxisChartSeries {
    return [
      {
        name: 'TotalWorldBoxOfficeRevenue',
        data: box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'TotalWorldBoxOfficeRevenue'
          ]
        }
      },
      {
        name: 'HighestGrossingMovieInSeries',
        data: box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'HighestGrossingMovieInSeries'
          ]
        }
      }
    ];
  }
  function getSeries7(): ApexAxisChartSeries {
    return [
      {
        name: 'TotalWorldBoxOfficeRevenue',
        data: box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'TotalWorldBoxOfficeRevenue'
          ]
        }
      },
      {
        name: 'HighestGrossingMovieInSeries',
        data: box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'HighestGrossingMovieInSeries'
          ]
        }
      }
    ];
  }
  function getSeries8(): ApexAxisChartSeries {
    return [
      {
        name: 'Value',
        data: global_Electricity_Demand,
        parsing: {
          x: 'Label',
          y: [
            'Value'
          ]
        }
      }
    ];
  }
  function getSeries9(): ApexAxisChartSeries {
    return [
      {
        name: 'TotalWorldBoxOfficeRevenue',
        data: box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'TotalWorldBoxOfficeRevenue'
          ]
        }
      },
      {
        name: 'HighestGrossingMovieInSeries',
        data: box_Office_Revenue,
        parsing: {
          x: 'Franchise',
          y: [
            'HighestGrossingMovieInSeries'
          ]
        }
      }
    ];
  }
  function getSeries10(): ApexAxisChartSeries {
    return [
      {
        name: 'Value',
        data: global_Electricity_Demand,
        parsing: {
          x: 'Label',
          y: [
            'Value'
          ]
        }
      }
    ];
  }
  function getSeries11(): ApexAxisChartSeries {
    return [
      {
        name: 'Min',
        data: global_Electricity_Demand,
        parsing: {
          x: 'Label',
          y: [
            'Min',
            'Q1',
            'Median',
            'Q3',
            'Max'
          ]
        }
      }
    ];
  }
  function getSeries12(): ApexAxisChartSeries {
    return [
      {
        name: 'Value',
        data: global_Electricity_Demand,
        parsing: {
          x: 'Label',
          y: [
            'Value'
          ]
        }
      }
    ];
  }

  return (
    <>
      <div className={classes("row-layout apex-charts-container")}>
        <div className={classes("column-layout group")}>
          <ReactApexChart series={series} type="bar" options={options} className={classes("apex-chart")}></ReactApexChart>
        </div>
        <div className={classes("column-layout group")}>
          <ReactApexChart series={series1} type="area" options={options1} className={classes("apex-chart")}></ReactApexChart>
        </div>
        <div className={classes("column-layout group")}>
          <ReactApexChart series={series2} type="scatter" options={options2} className={classes("apex-chart")}></ReactApexChart>
        </div>
        <div className={classes("column-layout group")}>
          <ReactApexChart series={series3} type="line" options={options3} className={classes("apex-chart")}></ReactApexChart>
        </div>
        <div className={classes("column-layout group_1")}>
          <ReactApexChart series={series4} type="line" options={options4} className={classes("apex-chart")}></ReactApexChart>
        </div>
        <div className={classes("column-layout group_1")}>
          <ReactApexChart series={series5} type="area" options={options5} className={classes("apex-chart")}></ReactApexChart>
        </div>
        <div className={classes("column-layout group_1")}>
          <ReactApexChart series={series6} type="area" options={options6} className={classes("apex-chart")}></ReactApexChart>
        </div>
        <div className={classes("column-layout group_1")}>
          <ReactApexChart series={series7} type="line" options={options7} className={classes("apex-chart")}></ReactApexChart>
        </div>
        <div className={classes("column-layout group_1")}>
          <ReactApexChart series={series8} type="donut" options={options8} className={classes("apex-chart")}></ReactApexChart>
        </div>
        <div className={classes("column-layout group_1")}>
          <ReactApexChart series={series9} type="treemap" options={options9} className={classes("apex-chart")}></ReactApexChart>
        </div>
        <div className={classes("column-layout group_1")}>
          <ReactApexChart series={series10} type="radar" options={options10} className={classes("apex-chart")}></ReactApexChart>
        </div>
        <div className={classes("column-layout group_1")}>
          <ReactApexChart series={series11} type="boxPlot" options={options11} className={classes("apex-chart")}></ReactApexChart>
        </div>
        <div className={classes("column-layout group_1")}>
          <ReactApexChart series={series12} type="heatmap" options={options12} className={classes("apex-chart")}></ReactApexChart>
        </div>
      </div>
    </>
  );
}
