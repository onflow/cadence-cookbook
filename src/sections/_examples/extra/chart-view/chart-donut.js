// components
import PropTypes from 'prop-types';
import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function ChartDonut({ series }) {
  const chartOptions = useChart({
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
    stroke: {
      show: false,
    },
    legend: {
      horizontalAlign: 'center',
    },
    tooltip: {
      fillSeriesColor: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '90%',
        },
      },
    },
  });

  return <Chart dir="ltr" type="donut" series={series} options={chartOptions} width={400} />;
}

ChartDonut.propTypes = {
  series: PropTypes.array,
};
