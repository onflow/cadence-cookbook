// components
import PropTypes from 'prop-types';
import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function ChartColumnStacked({ series }) {
  const chartOptions = useChart({
    chart: {
      stacked: true,
      zoom: {
        enabled: true,
      },
    },
    legend: {
      itemMargin: {
        vertical: 8,
      },
      position: 'right',
      offsetY: 20,
    },
    plotOptions: {
      bar: {
        columnWidth: '16%',
      },
    },
    stroke: {
      show: false,
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '01/01/2011 GMT',
        '01/02/2011 GMT',
        '01/03/2011 GMT',
        '01/04/2011 GMT',
        '01/05/2011 GMT',
        '01/06/2011 GMT',
      ],
    },
  });

  return <Chart dir="ltr" type="bar" series={series} options={chartOptions} height={320} />;
}

ChartColumnStacked.propTypes = {
  series: PropTypes.array,
};
