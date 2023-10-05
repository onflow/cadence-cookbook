// components
import PropTypes from 'prop-types';
import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function ChartColumnMultiple({ series }) {
  const chartOptions = useChart({
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    tooltip: {
      y: {
        formatter: (value) => `$ ${value} thousands`,
      },
    },
    plotOptions: { bar: { columnWidth: '36%' } },
  });

  return <Chart dir="ltr" type="bar" series={series} options={chartOptions} height={320} />;
}

ChartColumnMultiple.propTypes = {
  series: PropTypes.array,
};
