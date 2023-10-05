// components
import PropTypes from 'prop-types';
import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function ChartColumnSingle({ series }) {
  const chartOptions = useChart({
    plotOptions: {
      bar: {
        columnWidth: '16%',
      },
    },
    stroke: {
      show: false,
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    tooltip: {
      y: {
        formatter: (value) => `$ ${value} thousands`,
      },
    },
  });

  return <Chart dir="ltr" type="bar" series={series} options={chartOptions} height={320} />;
}

ChartColumnSingle.propTypes = {
  series: PropTypes.array,
};
